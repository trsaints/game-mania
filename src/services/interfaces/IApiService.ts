import { AxiosInstance } from 'axios'


export interface IApiService {
	gameApi: AxiosInstance

	createRouteUrl(route: string): string
}