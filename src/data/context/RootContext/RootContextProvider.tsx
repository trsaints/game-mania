import { PropsWithChildren, useState } from 'react'
import { IRootContext }                from './IRootContext.ts'
import { RootContext }                 from './RootContext.ts'


function RootContextProvider({children}: PropsWithChildren) {
	const [clientSecret, setClientSecret] = useState<string>(import.meta.env.VITE_API_CLIENT_SECRET)

	const context: IRootContext = {
		clientSecret   : clientSecret,
		setClientSecret: setClientSecret
	}

	return (<RootContext.Provider value={context}>
		{children}
	</RootContext.Provider>)
}

export { RootContextProvider }