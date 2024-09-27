import { ISearch } from './ISearch.ts'
import style       from './Search.module.scss'


function Search(props: ISearch) {
	return (
		<main className={style.Search}>
			<h2>Search your next favorite game</h2>
		</main>
	)
}

export { Search }