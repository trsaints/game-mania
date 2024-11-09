import { DataRequestParams } from '@data/request-parameters'
import { Genre } from '@data/types'
import { IApiService, IDataService } from '@src/services'
import { ParserUtils } from '@src/utils'


export const GenreService: IDataService<Genre> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams,
					  apiService: IApiService
): Promise<Genre[]> {
	const baseUrl  = apiService.createRouteUrl('genres')
	const response = await apiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response.data?.results.map(
		(r: never) => ParserUtils.mapToCamelCase(r)) as Genre[] ?? []
}

async function getById(id: number, apiService: IApiService): Promise<Genre> {
	const baseUrl  = apiService.createRouteUrl(`genres/${id}`)
	const response = await apiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data as never) as Genre
}

