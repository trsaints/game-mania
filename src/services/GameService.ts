import { DataRequestParams } from 'src/data/request-parameters'
import { Game, Screenshots } from '@data/types'
import { ApiService } from '@src/services'
import { IGameService } from '@services/interfaces'
import { ParserUtils, TypeUtils } from '@src/utils'


export const GameService: IGameService = {
	getAll,
	getById,
	getScreenshots
}

async function getAll(params?: DataRequestParams): Promise<Game[]> {
	const baseUrl  = ApiService.createRouteUrl('games')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response.data?.results.map(TypeUtils.mapToGame) ?? []
}

async function getById(id: number): Promise<Game> {
	const gameUrl  = ApiService.createRouteUrl(`games/${id}`)
	const response = await ApiService.gameApi.get(gameUrl)

	return TypeUtils.mapToGame(response.data as never)
}

async function getScreenshots(id: number): Promise<Screenshots> {
	const routeUrl = ApiService.createRouteUrl(`games/${id}/screenshots`)
	const response = await ApiService.gameApi.get(routeUrl)

	return {
		id,
		...response.data
	}
}


