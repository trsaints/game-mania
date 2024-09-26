import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { ErrorPage } from './pages/ErrorPage'
import { Root } from './routes/Root'


const router = createBrowserRouter(
	[
		{
			path   : '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				
			]
		}
	])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
