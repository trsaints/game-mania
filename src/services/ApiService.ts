import axios           from 'axios'
import { IApiService } from '@services/interfaces/IApiService.ts'


const gameApi = axios.create({
								 baseURL: import.meta.env.VITE_API_URL_BACKEND
										  ?? 'http://localhost:3333/'
							 })

export const ApiService: IApiService = {
	gameApi,
	createRouteUrl
}

function createRouteUrl(route: string): string {
	return `${import.meta.env.VITE_API_URL_BACKEND}${route}?token&key=${import.meta.env.VITE_API_CLIENT_SECRET}`
}