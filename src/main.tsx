import { LocalDb }    from '@data/local-storage'
import {
	Game,
	Genre,
	LocalDbStore,
	Platform,
	Publisher,
	Tag
}                     from '@data/types'
import {
	ErrorPage
}                     from '@views/pages'
import {
	Root,
	Search
}                     from '@views/routes'
import {
	Home
}                     from '@views/routes/Home'
import { StrictMode } from 'react'
import {
	createRoot
}                     from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider
}                     from 'react-router-dom'

import './reset.scss'
import './style.scss'


const db = new LocalDb('game-mania', 1)

document.addEventListener('DOMContentLoaded', () => {
	const gameSchema: LocalDbStore<Game> = {
		name         : 'games',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const genreSchema: LocalDbStore<Genre> = {
		name         : 'genres',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const platformSchema: LocalDbStore<Platform> = {
		name         : 'platforms',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const tagSchema: LocalDbStore<Tag> = {
		name         : 'tags',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const publisherSchema: LocalDbStore<Publisher> = {
		name         : 'publishers',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	db.create([
				  gameSchema,
				  platformSchema,
				  genreSchema,
				  tagSchema,
				  publisherSchema
			  ])
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
