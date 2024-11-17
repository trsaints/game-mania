import { DataRequestParams } from 'src/data/request-parameters'
import { Game, Screenshots } from '@data/types'
import { IApiService } from '@src/services'
import { IGameService } from '@services/interfaces'
import { IParserUtils, ITypeUtils } from '@src/utils'


export class GameService implements IGameService {
	constructor(parserUtils: IParserUtils, typeUtils: ITypeUtils) {
		this._parserUtils = parserUtils
		this._typeUtils   = typeUtils
	}

	private readonly _parserUtils: IParserUtils
	private readonly _typeUtils: ITypeUtils

	async getAll(params: DataRequestParams,
				 apiService: IApiService
	): Promise<Game[]> {
		const baseUrl  = apiService.createRouteUrl('games')
		const response = await apiService.gameApi.get(baseUrl, {
			params: params
					? this._parserUtils.mapToSnakeCase(params as never)
					: {}
		})

		return response.data?.results.map((game: never) => {
			return this._typeUtils.mapToGame(game, this._parserUtils)
		}) ?? []
	}

	async getById(id: number, apiService: IApiService): Promise<Game> {
		const gameUrl  = apiService.createRouteUrl(`games/${id}`)
		const response = await apiService.gameApi.get(gameUrl)

		return this._typeUtils.mapToGame(response.data as never,
										 this._parserUtils
		)
	}

	async getScreenshots(id: number,
						 apiService: IApiService
	): Promise<Screenshots> {
		const routeUrl = apiService.createRouteUrl(`games/${id}/screenshots`)
		const response = await apiService.gameApi.get(routeUrl)

		return response.data as Screenshots
	}
}




