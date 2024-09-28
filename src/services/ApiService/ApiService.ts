import axios from 'axios'

const gameApi = axios.create({
								 baseURL: import.meta.env.VITE_API_URL_BACKEND
										  ?? 'http://localhost:3333/'
							 })

export const ApiService = {	
	gameApi,
	createRouteUrl
}


function createRouteUrl(route: string) {
	return `${import.meta.env.VITE_API_URL_BACKEND}/${route}`
}