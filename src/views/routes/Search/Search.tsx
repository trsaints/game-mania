import { RootContext }                           from '@data/context'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { GameCard }                              from '@views/components'
import {
	SearchFilter
}                                                from '@views/components/SearchFilter'
import { useContext, useEffect }                 from 'react'
import style                                     from './Search.module.scss'


export { Search }

function Search() {
	const {
			  games,
			  genres,
			  platforms,
			  publishers,
			  apiMiddleware,
			  setGenres,
			  setPlatforms,
			  setPublishers,
			  setTags,
			  tags
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
	}, [])

	return (
		<main className={style.Search}>
			<h2>Search your next favorite game</h2>

			{(genres && publishers && platforms && tags)
			 && <SearchFilter
                 publishers={publishers}
                 platforms={platforms}
                 genres={genres}
                 tags={tags}
             />}

			{games && <GameList games={games}/>}
		</main>
	)
}

interface IGameList {
	games: Game[]
}

function GameList({ games }: IGameList) {
	const listItems = (games?.map(g =>
									  (<li key={`game-${g.id}`}>
										  <GameCard game={g}/>
									  </li>)))

	return (
		<ul className={style.GameList}>{listItems}</ul>
	)
}