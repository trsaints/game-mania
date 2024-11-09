import {
	IIApiMiddlewareFilter
} from '@src/filters/interfaces/IIApiMiddlewareFilter.ts'
import { Game } from '@data/types'
import { ApiData, ILocalDb } from '@data/local-storage'
import { IApiService, IGameService } from '@src/services'


export const ApiMiddlewareFilter: IIApiMiddlewareFilter = {
	mapMissingScreenshots,
	mapGameDetails
}

async function mapMissingScreenshots(game: Game,
									 gameService: IGameService,
									 apiService: IApiService,
									 database: ILocalDb<ApiData>
): Promise<Game> {
	const screenshots      = await gameService.getScreenshots(game.id,
															  apiService
	)
	const successfulUpdate = await database.updateObject('games', {
		...game,
		screenshots
	})

	if (! successfulUpdate) {
		return Promise.reject('Failed to update game with missing screenshots')
	}

	return Promise.resolve(game)
}

async function mapGameDetails(game: Game,
							  gameService: IGameService,
							  apiService: IApiService,
							  database: ILocalDb<ApiData>
): Promise<Game> {
	const gameDetails      = await gameService.getById(game.id, apiService)
	const successfulUpdate = await database.updateObject('games', {
		...game,
		...gameDetails
	})

	if (! successfulUpdate) {
		return Promise.reject('Failed to update game with missing details')
	}

	return Promise.resolve(game)
}