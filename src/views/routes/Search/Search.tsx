import { RootContext }           from '@data/context'
import { GameCard }              from '@views/components'
import { SearchFilter }          from '@views/components/SearchFilter'
import { useContext, useEffect } from 'react'
import style                     from './Search.module.scss'


function Search() {
	const {
			  games,
			  genreService,
			  genres,
			  platformService,
			  platforms,
			  publisherService,
			  publishers,
			  setGenres,
			  setPlatforms,
			  setPublishers,
			  setTags,
			  tagService,
			  tags
		  } = useContext(RootContext)

	const gameList = games?.map(g =>
									(<li key={`game-${g.id}`}>
										<GameCard game={g}/>
									</li>))

	useEffect(() => {
		publisherService?.getAll({}).then(p => setPublishers(p))
		platformService?.getAll({}).then(p => setPlatforms(p))
		tagService?.getAll({}).then(t => setTags(t))
		genreService?.getAll({}).then(g => setGenres(g))
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