import { RootContextProvider }        from '@data/context/RootContext'
import { Footer, Header, SearchForm } from '@views/components'
import { Outlet }                     from 'react-router-dom'


function Root() {
	return (
		<RootContextProvider>
			<Header/>
			<SearchForm/>
			<Outlet/>
			<Footer/>
		</RootContextProvider>
	)
}

export { Root }