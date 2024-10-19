import { DataRequestParams } from 'src/data/request-parameters'
import { Platform }          from '@data/types'
import { ApiService, IDataService } from '@services/index.ts'
import { ParserUtils }              from '@src/utils'


export const PlatformService: IDataService<Platform> = {
	getAll,
	getById
}

async function getAll(params: DataRequestParams): Promise<Platform[]> {
	const baseUrl  = ApiService.createRouteUrl('platforms')
	const response = await ApiService.gameApi.get(baseUrl, {
		params: params ? ParserUtils.mapToSnakeCase(params as never) : {}
	})

	return response?.data?.results.map(
		(r: never) => ParserUtils.mapToCamelCase(r)) as Platform[] ?? []
}

async function getById(id: number): Promise<Platform> {
	const baseUrl  = ApiService.createRouteUrl(`platforms/${id}`)
	const response = await ApiService.gameApi.get(baseUrl)

	return ParserUtils.mapToCamelCase(response?.data as never) as Platform
}