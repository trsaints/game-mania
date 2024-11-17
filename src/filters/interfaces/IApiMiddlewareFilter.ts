import { Game } from '@data/types'
import { ApiData, ILocalDb } from '@data/local-storage'
import { IApiService, IGameService } from '@src/services'


export interface IApiMiddlewareFilter {
	mapMissingScreenshots(game: Game,
						  gameService: IGameService,
						  apiService: IApiService,
						  database: ILocalDb<ApiData>
	): Promise<Game>

	mapGameDetails(game: Game,
				   gameService: IGameService,
				   apiService: IApiService,
				   database: ILocalDb<ApiData>
	): Promise<Game>

	mapGameData(data: ApiData,
				gameService: IGameService,
				apiService: IApiService,
				database: ILocalDb<ApiData>
	): Promise<Game>
}