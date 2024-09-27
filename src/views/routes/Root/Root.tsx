import { Outlet }              from 'react-router-dom'
import { RootContextProvider } from '../../../data/context/RootContext'
import { Footer }              from '../../components/Footer'
import { Header }              from '../../components/Header'
import { SearchForm }          from '../../components/SearchForm'


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