import { Genre, Publisher, Tag } from '@data/types'
import { Link } from 'react-router-dom'
import style from '@views/components/SearchWidget/SearchWidget.module.scss'
import { ISearchMenu } from '@views/components/SearchNavbar/ISearchMenu.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowUpRightFromSquare, faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons'


export function SearchMenu(props: ISearchMenu) {
	const getList = (data: Genre[] | Tag[] | Publisher[]) => data.map(d => {
		const key = `search-${typeof (d)}-${d.id}`

		return (
			<li key={key}>
				<Link to="/search">
					{d.name}
					<FontAwesomeIcon icon={faArrowUpRightFromSquare}
									 className="icon--right"/>
				</Link>
			</li>)
	})

	const getSection = (key: keyof ISearchMenu) => {
		return (
			<li>
				<details className={style.SearchSection}>
					<summary>
						{key}
						<FontAwesomeIcon icon={faCircleChevronRight}
										 className="icon--right"/>
					</summary>

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