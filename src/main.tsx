import { LocalDb }                             from '@data/local-storage'
import { StartupUtils }                        from '@utils/StartupUtils.ts'
import { ErrorPage }                           from '@views/pages'
import { Root, Search }                        from '@views/routes'
import { Home }                                from '@views/routes/Home'
import { StrictMode }                          from 'react'
import { createRoot }                          from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './reset.scss'
import './style.scss'


export const db = new LocalDb('game-mania', 1)

document.addEventListener('DOMContentLoaded', () => {
	StartupUtils.initializeDb(db)
})

const mainRouter = createBrowserRouter(
	[
		{
			path        : '/',
			element     : <Root/>,
			errorElement: <ErrorPage/>,
			children    : [
				{
					path   : '/',
					element: <Home/>
				},
				{
					path   : 'search',
					element: <Search/>
				}
			]
		}
	])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={mainRouter}/>
	</StrictMode>
)
