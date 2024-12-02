import style from './SearchPage.module.scss'
import { GamePageList, SearchFilter } from '@views/components'
import { useContext, useState } from 'react'
import { IRootContext, RootContext } from '@data/context'


export { SearchPage }

function SearchPage() {
	const rootContext = useContext(RootContext)

	const { games } = rootContext


	return (
		<div className={style.SearchPage}>
			<SearchControls context={rootContext}/>

			{games && <GamePageList games={games}/>}
		</div>
	)
}

interface ISearchControls {
	context: IRootContext
}

function SearchControls({ context }: ISearchControls) {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const filterSelector = isVisible
						   ? `${style.SearchControls} ${style.filterVisible}`
						   : style.SearchControls

	const textSwitch = isVisible ? 'hide' : 'show'

	const { genres, publishers, platforms, tags } = context

	if (! genres || ! publishers || ! platforms || ! tags) return (<></>)

	return (
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
							type="button">
								 <span className="sr-only">
									 {textSwitch} filters
								 </span>
					</button>
				</li>
			</menu>
		</aside>
	)
}