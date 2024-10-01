import { GameContextProvider }          from '@data/context'
import { Footer, Header, SearchWidget } from '@views/components'
import { Outlet }                       from 'react-router-dom'


function Root() {
	return (
		<GameContextProvider>
			<Header/>
			<SearchWidget/>
			<Outlet/>
			<Footer/>
		</GameContextProvider>
	)
}

export { Root }