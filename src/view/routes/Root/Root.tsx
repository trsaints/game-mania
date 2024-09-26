import { Form, Outlet } from 'react-router-dom'
import { RootContextProvider } from '../../../data/context/RootContext'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

function Root() {
	
	return (
		<RootContextProvider>
			<Header />

			<Form method='post'>
				<fieldset>
					<legend>Search</legend>

					<p>
						<label htmlFor='search'>Search Term</label>
						<input type='search' id='search' />
					</p>
				</fieldset>

				<button type='submit'>Search</button>
			</Form>

			<Outlet/>

			<Footer />
		</RootContextProvider>
	)
}

export { Root }