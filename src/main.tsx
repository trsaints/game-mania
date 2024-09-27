import { StrictMode }                          from 'react'
import { createRoot }                          from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage }                           from './view/pages/ErrorPage'
import { GamePage }                            from './view/routes/Game'
import { Root }                                from './view/routes/Root'
import { Search }                              from './view/routes/Search'


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
