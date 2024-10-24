import style from './SearchPage.module.scss'
import { GamePageList, SearchFilter } from '@views/components'
import { useContext } from 'react'
import { RootContext } from '@data/context'


export { SearchPage }

function SearchPage() {
	const {
			  games,
			  genres,
			  platforms,
			  publishers,
			  tags
		  } = useContext(RootContext)

	return (
		<div className={style.SearchPage}>
			{(genres && publishers && platforms && tags)
			 && <SearchFilter
				 publishers={publishers}
				 platforms={platforms}
				 genres={genres}
				 tags={tags}
			 />}

			{games && <GamePageList games={games}/>}
		</div>
	)
}