import { StrictMode }                          from 'react'
import { createRoot }                          from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage }              from '@views/pages'
import { GamePage, Root, Search } from '@views/routes'


const mainRouter = createBrowserRouter(
	[
		{
			path        : '/',
			element     : <Root/>,
			errorElement: <ErrorPage/>,
			children    : [
				{
					path   : 'search',
					element: <Search/>
				},
				{
					path   : 'search/:id',
					element: <GamePage/>
				}
			]
		}
	])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={mainRouter}/>
	</StrictMode>
)
