import { RootContextProvider } from '@data/context'
import { Footer, Header, SearchWidget } from '@views/components'
import { Outlet } from 'react-router-dom'
import { RootViewModel } from '@src/view-models/RootViewModel.ts'


const viewModel = new RootViewModel()

function Root() {
	return (
		<RootContextProvider {...viewModel}>
			<Header/>
			<SearchWidget/>
			<Outlet/>
			<Footer/>
		</RootContextProvider>
	)
}

export { Root }