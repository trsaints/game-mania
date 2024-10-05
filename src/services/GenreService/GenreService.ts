import { GenreRequestParams } from '@data/requests'
import { GenreData }          from '@data/types'
import { ApiService }         from '@src/services'
import { ParserUtils }        from '@src/utils'


export const GenreService = {
	getGenres,
	getGenreById
}

async function getGenres(params: GenreRequestParams): Promise<GenreData[]> {
	const baseUrl  = ApiService.createRouteUrl('genres')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response.data?.results.map((r: any) => ParserUtils.mapToCamelCase(r)) as GenreData[]
		   ?? []
}

async function getGenreById(id: number): Promise<GenreData> {
	const baseUrl  = ApiService.createRouteUrl(`genres/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as GenreData
}

