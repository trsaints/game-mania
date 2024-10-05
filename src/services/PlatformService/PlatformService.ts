import { PlatformRequestParams } from '@data/requests'
import { PlatformData }          from '@data/types'
import { ApiService }            from '@src/services'
import { ParserUtils }           from '@src/utils'


export const PlatformService = {
	getPlatforms,
	getPlatformById
}

async function getPlatforms(params: PlatformRequestParams): Promise<PlatformData[]> {
	const baseUrl  = ApiService.createRouteUrl('platforms')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response?.data?.results.map(
		(r: any) => ParserUtils.mapToCamelCase(r)) as PlatformData[] ?? []
}

async function getPlatformById(id: number): Promise<PlatformData> {
	const baseUrl  = ApiService.createRouteUrl(`platforms/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as PlatformData
}