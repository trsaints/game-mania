import style from './Search.module.scss'
import { Outlet } from 'react-router-dom'


export { Search }

function Search() {
	return (
		<main className={style.Search}>
			<h2 id="search-header">Search your next favorite game</h2>

			<Outlet/>
		</main>
	)
}
