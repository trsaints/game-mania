import { PropsWithChildren } from 'react'
import { IRootContext }      from './IRootContext.ts'
import { RootContext }       from './RootContext.ts'


function RootContextProvider({children}: PropsWithChildren) {
	const context: IRootContext = {
		clientSecret: import.meta.env.VITE_API_CLIENT_SECRET
	}

	return (<RootContext.Provider value={context}>
		{children}
	</RootContext.Provider>)
}

export { RootContextProvider }