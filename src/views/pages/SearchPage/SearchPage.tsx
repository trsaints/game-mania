import style from './SearchPage.module.scss'
import { GamePageList, SearchFilter } from '@views/components'
import { useContext, useState } from 'react'
import { RootContext } from '@data/context'


export { SearchPage }

function SearchPage() {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const {
			  games,
			  genres,
			  platforms,
			  publishers,
			  tags
		  } = useContext(RootContext)

	const filterSelector = isVisible
						   ? `${style.SearchControls} ${style.filterVisible}`
						   : style.SearchControls

	return (
		<div className={style.SearchPage}>
			{(genres && publishers && platforms && tags)
			 && (
				 <aside className={filterSelector}>
					 <SearchFilter
						 publishers={publishers}
						 platforms={platforms}
						 genres={genres}
						 tags={tags}
					 />

					 <menu>
						 <li>
							 <button className={style.Switch}
									 onClick={() => setIsVisible(! isVisible)}
									 type="button"></button>
						 </li>
					 </menu>
				 </aside>
			 )
			}

			{games && <GamePageList games={games}/>}
		</div>
	)
}