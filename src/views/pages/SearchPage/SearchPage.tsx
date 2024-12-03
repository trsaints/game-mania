import style from './SearchPage.module.scss'
import { GamePageList } from '@views/components'
import { useContext } from 'react'
import { RootContext } from '@data/context'


export { SearchPage }

function SearchPage() {
	const rootContext = useContext(RootContext)

	const { games } = rootContext

	return (
		<div className={style.SearchPage}>
			{games && <GamePageList.Root games={games}></GamePageList.Root>}
		</div>
	)
}

