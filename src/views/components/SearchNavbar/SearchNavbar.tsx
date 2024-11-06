import { Genre, Publisher, Tag } from '@data/types'
import { Link } from 'react-router-dom'
import style from '@views/components/SearchWidget/SearchWidget.module.scss'
import { ISearchNavbar } from '@views/components/SearchNavbar/ISearchNavbar.ts'


export function SearchNavbar(props: ISearchNavbar) {
	const getList = (data: Genre[] | Tag[] | Publisher[]) => data.map(d => {
		const key = `search-${typeof (d)}-${d.id}`

		return (<li key={key}><Link to="/search">{d.name}</Link></li>)
	})

	const getSection = (key: keyof ISearchNavbar) => {
		return (
			<li>
				<details className={style.SearchSection} >
					<summary>{key}</summary>

					<ul className={style.SearchOptions}>
						{getList(props[key])}
					</ul>
				</details>
			</li>)
	}

	return (
		<menu className={style.SearchMenu}>
			{getSection('genres')}
			{getSection('tags')}
			{getSection('publishers')}
		</menu>
	)
}