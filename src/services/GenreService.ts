import { DataRequestParams }        from '@data/requests'
import { Genre }                    from '@data/types'
import { ApiService, IDataService } from '@services/index.ts'
import { ParserUtils }              from '@src/utils'


export const GenreService: IDataService<Genre> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams): Promise<Genre[]> {
	const baseUrl  = ApiService.createRouteUrl('genres')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response.data?.results.map((r: any) => ParserUtils.mapToCamelCase(r)) as Genre[]
		   ?? []
}

async function getById(id: number): Promise<Genre> {
	const baseUrl  = ApiService.createRouteUrl(`genres/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as Genre
}

