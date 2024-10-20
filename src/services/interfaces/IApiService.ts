import { AxiosInstance } from 'axios'


export interface IApiService {
	createRouteUrl(route: string): string

	gameApi: AxiosInstance
}