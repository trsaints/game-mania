import { TagRequestParams } from '@data/requests'
import { Tag }              from '@data/types'
import { ApiService }       from '@src/services'
import { ParserUtils }      from '@src/utils'


export const TagService = {
	getTags,
	getTagById
}

async function getTags(params: TagRequestParams): Promise<Tag[]> {
	const baseUrl  = ApiService.createRouteUrl('tags')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response.data?.results.map(
		(r: any) => ParserUtils.mapToCamelCase(r)) as Tag[] ?? []
}

async function getTagById(id: number): Promise<Tag> {
	const baseUrl  = ApiService.createRouteUrl(`tags/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as Tag
}