import { RootContext } from '@data/context'
import { useContext } from 'react'
import style from './Search.module.scss'
import { Outlet } from 'react-router-dom'
import { useSearchPage } from '@src/hooks/useSearchPage.ts'


export { Search }

function Search() {
	useSearchPage(useContext(RootContext))

	return (
		<main className={style.Search}>
			<h2 id="search-header">Search your next favorite game</h2>

			<Outlet/>
		</main>
	)
}
