import { GameContextProvider }        from '@data/context'
import { Footer, Header, SearchForm } from '@views/components'
import { Outlet }                     from 'react-router-dom'


function Root() {
	return (
		<GameContextProvider>
			<Header/>
			<SearchForm/>
			<Outlet/>
			<Footer/>
		</GameContextProvider>
	)
}

export { Root }