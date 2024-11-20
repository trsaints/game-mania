import { ErrorPage, GamePage, SearchPage } from '@views/pages'
import { Root, Search } from '@views/routes'
import { HomePage } from 'src/views/pages/HomePage'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './reset.scss'
import './style.scss'


const mainRouter = createBrowserRouter(
	[
		{
			path        : '/',
			element     : <Root/>,
			errorElement: <ErrorPage/>,
			children    : [
				{
					index  : true,
					element: <HomePage/>
				},
				{
					path    : 'search',
					element : <Search/>,
					children: [
						{
							index  : true,
							element: <SearchPage/>
						},
						{
							path   : ':id',
							element: <GamePage/>,
							loader : ({ params }) => ({ id: params['id'] })
						}
					]
				}
			]
		}
	])


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={mainRouter}/>
	</StrictMode>
)
