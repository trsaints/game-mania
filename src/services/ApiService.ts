import axios from 'axios'
import { IApiService } from '@services/interfaces'


export class ApiService implements IApiService {
	public readonly gameApi = axios.create({
											   baseURL: import.meta.env.VITE_API_URL_BACKEND
														?? 'http://localhost:3333/'
										   })

	createRouteUrl(route: string): string {
		console.log('generated route url: ',
					`${import.meta.env.VITE_API_URL_BACKEND}/${route}`)

		return `${import.meta.env.VITE_API_URL_BACKEND}/${route}`
	}
}
