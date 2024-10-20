import { RootContext } from '@data/context'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { GamePageList, SearchFilter } from '@views/components'
import { useContext, useEffect } from 'react'
import style from './Search.module.scss'


export { Search }

function Search() {
	const {
			  games,
			  genres,
			  platforms,
			  publishers,
			  apiMiddleware,
			  tags,
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

			{(genres && publishers && platforms && tags)
			 && <SearchFilter
				 publishers={publishers}
				 platforms={platforms}
				 genres={genres}
				 tags={tags}
			 />}

			{games && <GamePageList games={games}/>}
		</main>
	)
}
