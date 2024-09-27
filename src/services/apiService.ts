import axios from 'axios'


async function getApiToken() {
	const clientId     = import.meta.env.VITE_API_CLIENT_ID as string,
		  clientSecret = import.meta.env.VITE_API_CLIENT_SECRET as string,
		  apiUrl       = `https://id.twitch.tv/oauth2/token`

	const result = await axios.post(apiUrl, null, {
		params: {
			client_id    : clientId,
			client_secret: clientSecret,
			grant_type   : 'client_credentials'
		}
	})

	return result.data?.access_token
}

export const apiService = {
	getApiToken
}