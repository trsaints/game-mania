import style from './SearchPage.module.scss'
import { GamePageList } from '@views/components'
import { useContext } from 'react'
import { RootContext } from '@data/context'
import { SearchControls } from '@views/pages'


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

