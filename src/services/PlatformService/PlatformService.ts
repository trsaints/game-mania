import { PlatformRequestParams }    from '@data/requests'
import { Platform }                 from '@data/types'
import { ApiService, IDataService } from '@src/services'
import { ParserUtils }              from '@src/utils'


export const PlatformService: IDataService<Platform> = {
	getAll,
	getById
}

async function getAll(params: PlatformRequestParams): Promise<Platform[]> {
	const baseUrl  = ApiService.createRouteUrl('platforms')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params) : {}
	})

	return response?.data?.results.map(
		(r: any) => ParserUtils.mapToCamelCase(r)) as Platform[] ?? []
}

async function getById(id: number): Promise<Platform> {
	const baseUrl  = ApiService.createRouteUrl(`platforms/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data) as Platform
}