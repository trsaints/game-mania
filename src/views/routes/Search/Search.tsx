import { RootContext } from '@data/context'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { useContext, useEffect } from 'react'
import style from './Search.module.scss'
import { Outlet } from 'react-router-dom'


export { Search }

function Search() {
	const {
			  games,
			  apiMiddleware,
			  setGenres,
			  setGames,
			  setPlatforms,
			  setPublishers,
			  setTags
		  } = useContext(RootContext)

	useEffect(() => {
		apiMiddleware?.getAll('publishers', {})
			.then(apiData => setPublishers(apiData as Publisher[]))
		apiMiddleware?.getAll('platforms', {})
			.then(apiData => setPlatforms(apiData as Platform[]))
		apiMiddleware?.getAll('tags', {})
			.then(apiData => setTags(apiData as Tag[]))
		apiMiddleware?.getAll('genres', {})
			.then(apiData => setGenres(apiData as Genre[]))

		if (games) {
			return
		}

		apiMiddleware?.getAll('games', { pageSize: 100, metacritic: '80,100' })
			.then(apiData => setGames(apiData as Game[]))
	}, [])

	return (
		<main className={style.Search}>
			<h2 id="search-header">Search your next favorite game</h2>

			<Outlet/>
		</main>
	)
}
