import { DataRequestParams } from 'src/data/request-parameters'
import { Tag }               from '@data/types'
import { ApiService, IDataService } from '@services/index.ts'
import { ParserUtils }              from '@src/utils'


export const TagService: IDataService<Tag> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams): Promise<Tag[]> {
	const baseUrl  = ApiService.createRouteUrl('tags')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response.data?.results.map(
		(r: any) => ParserUtils.mapToCamelCase(r)) as Tag[] ?? []
}

async function getById(id: number): Promise<Tag> {
	const baseUrl  = ApiService.createRouteUrl(`tags/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as Tag
}