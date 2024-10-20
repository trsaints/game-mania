import { RootContextProvider } from '@data/context'
import { Footer, Header, SearchWidget } from '@views/components'
import { Outlet } from 'react-router-dom'


function Root() {
	return (
		<RootContextProvider>
			<Header/>
			<SearchWidget/>
			<Outlet/>
			<Footer/>
		</RootContextProvider>
	)
}

export { Root }