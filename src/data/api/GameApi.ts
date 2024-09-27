import axios from 'axios'

export namespace GameApi {
	export const api = axios.create({
										baseURL: import.meta.env.VITE_API_URL_BACKEND
												 ?? 'http://localhost:3333'
									})
}

