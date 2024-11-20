import axios from 'axios'
import { IApiService } from '@services/interfaces'


export class ApiService implements IApiService {
	public readonly gameApi = axios.create({
											   baseURL: import.meta.env.VITE_API_URL_BACKEND
														?? 'http://localhost:3333/'
										   })

	createRouteUrl(route: string): string {
		return `${import.meta.env.VITE_API_URL_BACKEND}${route}?token&key=${import.meta.env.VITE_API_CLIENT_SECRET}`
	}
}
