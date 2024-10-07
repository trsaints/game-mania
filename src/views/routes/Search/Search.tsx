import { RootContext }                     from '@data/context'
import { Genre, Platform, Publisher, Tag } from '@data/types'
import { db }                              from '@src/main.tsx'
import { GameCard }                        from '@views/components'
import { SearchFilter }                    from '@views/components/SearchFilter'
import { useContext, useEffect }           from 'react'
import style                               from './Search.module.scss'


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

	const gameList = games?.map(g =>
									(<li key={`game-${g.id}`}>
										<GameCard game={g}/>
									</li>))

	useEffect(() => {
		apiMiddleware?.getAll('publishers', db)
					 .then(apiData => setPublishers(apiData as Publisher[]))
		apiMiddleware?.getAll('platforms', db)
					 .then(apiData => setPlatforms(apiData as Platform[]))
		apiMiddleware?.getAll('tags', db)
					 .then(apiData => setTags(apiData as Tag[]))
		apiMiddleware?.getAll('genres', db)
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

			<ul className={style.GameList}>{gameList}</ul>
		</main>
	)
}

export { Search }