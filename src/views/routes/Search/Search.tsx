import { RootContext } from '@data/context'
import { useContext } from 'react'
import style from './Search.module.scss'
import { Outlet } from 'react-router-dom'
import { useSearchOptions } from '@src/hooks/useSearchOptions.ts'


export { Search }

function Search() {
	useSearchOptions(useContext(RootContext))

	return (
		<main className={style.Search}>
			<h2 id="search-header">Search your next favorite game</h2>

			<Outlet/>
		</main>
	)
}
