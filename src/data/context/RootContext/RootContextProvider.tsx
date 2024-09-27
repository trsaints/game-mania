import { PropsWithChildren, useEffect, useState } from 'react'
import { apiService }                             from '../../../services/apiService.ts'
import { IRootContext }                           from './IRootContext.ts'
import { RootContext }                            from './RootContext.ts'


function RootContextProvider({children}: PropsWithChildren) {
	const [clientSecret, setClientSecret] = useState<string>('')

	useEffect(() => {
		apiService.getApiToken().then((data: string) => setClientSecret(data))
	}, [])

	const context: IRootContext = {
		clientSecret: clientSecret,
		setClientSecret: setClientSecret
	}
	
	return (<RootContext.Provider value={context}>
		{children}
	</RootContext.Provider>)
}

export { RootContextProvider }