import { PropsWithChildren, useEffect, useState } from 'react'
import {
	ApiService
}                                                 from '../../../services/ApiService.ts'
import { IRootContext }                           from './IRootContext.ts'
import { RootContext }                            from './RootContext.ts'


function RootContextProvider({children}: PropsWithChildren) {
	const [clientSecret, setClientSecret] = useState<string>('')

	useEffect(() => {
		ApiService.getApiToken().then((data: string) => setClientSecret(data))
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