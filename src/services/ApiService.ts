import axios from 'axios'

export const ApiService = {	
	
}

const gameApi = axios.create({
							 baseURL: import.meta.env.VITE_API_URL_BACKEND
									  ?? 'http://localhost:3333'
						 })

