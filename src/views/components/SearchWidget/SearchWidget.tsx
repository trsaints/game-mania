import { Form } from 'react-router-dom'
import style    from './SearchWidget.module.scss'


function SearchWidget() {
	return (
		<aside className={style.SearchWidget}>
			<SearchForm/>
			<SearchNavbar/>
		</aside>
	)
}

function SearchForm() {
	return (
		<Form method="post" className={style.SearchForm}>
			<label className={style.Label} htmlFor="search">Keyword</label>
			<input className={style.Search} type="search" id="search"/>
			<button className={`primary ${style.Submit}`} type="submit">Search</button>
		</Form>
	)
}

function SearchNavbar() {
	return (
		<menu className={style.SearchMenu}>
			<li>
				<details>
					<summary>genres</summary>

					<ul className={style.SearchOptions}>
						<li>action</li>
						<li>adventure</li>
						<li>strategy</li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary>tags</summary>

					<ul className={style.SearchOptions}>
						<li>singleplayer</li>
						<li>mmo</li>
						<li>cooperative</li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary>publishers</summary>

					<ul className={style.SearchOptions}>
						<li>rockstar games</li>
						<li>cd projekt red</li>
						<li>mojang</li>
					</ul>
				</details>
			</li>
		</menu>
	)
}

export { SearchWidget }
