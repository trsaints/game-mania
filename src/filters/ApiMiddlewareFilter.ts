import {
	IIApiMiddlewareFilter
} from '@src/filters/interfaces/IIApiMiddlewareFilter.ts'
import { Game } from '@data/types'
import { ApiData, ILocalDb } from '@data/local-storage'
import { IGameService } from '@src/services'


export const ApiMiddlewareFilter: IIApiMiddlewareFilter = {
	mapMissingScreenshots
}

async function mapMissingScreenshots(game: Game,
									 gameService: IGameService,
									 database: ILocalDb<ApiData>
): Promise<Game> {
	if (game.shortScreenshots) return Promise.resolve(game)

	const screenshots      = await gameService.getScreenshots(game.id)
	const successfulUpdate = await database.updateObject('games', {
		...game,
		screenshots
	})

	if (! successfulUpdate) {
		return Promise.reject('Failed to update game with missing screenshots')
	}

	return Promise.resolve(game)
}