import { DataRequestParams } from 'src/data/request-parameters'
import { Game, Screenshots } from '@data/types'
import { ApiService }        from '@services/index.ts'
import { IGameService }      from '@services/interfaces'
import { ParserUtils }       from '@src/utils'
import { TypeUtils }         from '@utils/TypeUtils.ts'


export const GameService: IGameService = {
	getAll,
	getById,
	getScreenshots
}

async function getAll(params?: DataRequestParams): Promise<Game[]> {
	const baseUrl  = ApiService.createRouteUrl('games')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response.data?.results.map(TypeUtils.mapToGame) ?? []
}

async function getById(id: number): Promise<Game> {
	const gameUrl  = ApiService.createRouteUrl(`games/${id}`)
	const response = await ApiService.gameApi.get(gameUrl)

	return TypeUtils.mapToGame(response.data)
}

async function getScreenshots(id: number): Promise<Screenshots> {
	const routeUrl = ApiService.createRouteUrl(`games/${id}/screenshots`)
	const response = await ApiService.gameApi.get(routeUrl)

	return response.data as Screenshots
}


