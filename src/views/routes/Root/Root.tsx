import { Footer, Header, SearchForm } from '@views/components'
import { Outlet }                     from 'react-router-dom'


function Root() {
	return (
		<>
			<Header/>
			<SearchForm/>
			<Outlet/>
			<Footer/>
		</>
	)
}

export { Root }