import { PropsWithChildren, useEffect, useState } from 'react'
import { apiService } from '../../../services/apiService.ts'
import { IRootContext } from './IRootContext.ts'
import { RootContext } from './RootContext.ts'


function RootContextProvider({children}: PropsWithChildren) {
	const [token, setToken] = useState<IRootContext>('')

	useEffect(() => {
		apiService.getApiToken().then((data: string) => setToken(data))
	}, [])

	return (<RootContext.Provider value={token}>
		{children}
	</RootContext.Provider>)
}

export { RootContextProvider }