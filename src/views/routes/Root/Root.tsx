import { RootContextProvider } from '@data/context'
import { Footer, Header, SearchWidget } from '@views/components'
import { Outlet } from 'react-router-dom'
import { RootViewModel } from '@src/view-models/RootViewModel.ts'
import { useEffect, useState } from 'react'


const viewModel = new RootViewModel()

function Root() {
	const [isDbInitialized, setIsDbInitialized] = useState(false)

	useEffect(() => {
		async function initializeDatabase() {
			try {
				await viewModel.initializeDb()
				setIsDbInitialized(true)
			} catch (error) {
				console.error('Failed to initialize database:', error)
			}
		}

		initializeDatabase()
	}, [])

	if (! isDbInitialized) {
		return <div>Loading...</div>
	}

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