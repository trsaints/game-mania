import { Genre, Publisher, Tag } from '@data/types'
import { GenreService, PublisherService, TagService } from '@src/services'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './SearchWidget.module.scss'
import { SearchForm } from '@views/components/SearchForm/SearchForm.tsx'


function SearchWidget() {
	const [genres, setGenres]         = useState<Genre[]>([])
	const [tags, setTags]             = useState<Tag[]>([])
	const [publishers, setPublishers] = useState<Publisher[]>([])

	const searchNavbarProps: ISearchNavbar = {
		genres,
		tags,
		publishers
	}

	useEffect(() => {
		GenreService.getAll({ pageSize: 5 }).then(g => setGenres(g))
		TagService.getAll({ pageSize: 5 }).then(t => setTags(t))
		PublisherService.getAll({ pageSize: 5 })
			.then(p => setPublishers(p))
	}, [])

	return (
		<aside className={style.SearchWidget}>
			<SearchForm/>
			<SearchNavbar {...searchNavbarProps} />
		</aside>
	)
}

interface ISearchNavbar {
	genres: Genre[]
	tags: Tag[]
	publishers: Publisher[]
}

function SearchNavbar(props: ISearchNavbar) {
	const getList = (data: Genre[] | Tag[] | Publisher[]) => data.map(d => {
		const key = `search-${typeof (d)}-${d.id}`

		return (<li key={key}><Link to="/search">{d.name}</Link></li>)
	})

	const getSection = (key: keyof ISearchNavbar) => {
		return (
			<li>
				<details>
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

export { SearchWidget }
