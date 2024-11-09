import { DataRequestParams } from 'src/data/request-parameters'
import { Game, Screenshots } from '@data/types'
import { IApiService } from '@src/services'
import { IGameService } from '@services/interfaces'
import { ParserUtils, TypeUtils } from '@src/utils'


export class GameService implements IGameService {
	async getAll(params: DataRequestParams,
				 apiService: IApiService
	): Promise<Game[]> {
		const baseUrl  = apiService.createRouteUrl('games')
		const response = await apiService.gameApi.get(baseUrl, {
			params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
		})

		return response.data?.results.map(TypeUtils.mapToGame) ?? []
	}

	async getById(id: number, apiService: IApiService): Promise<Game> {
		const gameUrl  = apiService.createRouteUrl(`games/${id}`)
		const response = await apiService.gameApi.get(gameUrl)

		return TypeUtils.mapToGame(response.data as never)
	}

	async getScreenshots(id: number,
						 apiService: IApiService
	): Promise<Screenshots> {
		const routeUrl = apiService.createRouteUrl(`games/${id}/screenshots`)
		const response = await apiService.gameApi.get(routeUrl)

		return response.data as Screenshots
	}
}




