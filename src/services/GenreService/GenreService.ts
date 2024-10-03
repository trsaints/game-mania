import { Genre }       from '@data/types'
import { ApiService }  from '@src/services'
import { ParserUtils } from '@src/utils'


export const GenreService = {
	getGenres,
	getGenreById
}

async function getGenres(): Promise<Genre[]> {
	const baseUrl  = ApiService.createRouteUrl('genres')
	const response = await ApiService.gameApi.get(baseUrl)

	return response.data?.results.map((r: any) => ParserUtils.mapToCamelCase(r)) as Genre[]
		   ?? []
}

async function getGenreById(id: number): Promise<Genre> {
	const baseUrl = ApiService.createRouteUrl(`genres/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as Genre
}

