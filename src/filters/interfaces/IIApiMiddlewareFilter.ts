import { Game } from '@data/types'
import { ApiData, ILocalDb } from '@data/local-storage'
import { IGameService } from '@src/services'


export interface IIApiMiddlewareFilter {
	mapMissingScreenshots(game: Game,
						  gameService: IGameService,
						  database: ILocalDb<ApiData>
	): Promise<Game>

	mapGameDetails(game: Game,
				   gameService: IGameService,
				   database: ILocalDb<ApiData>
	): Promise<Game>
}