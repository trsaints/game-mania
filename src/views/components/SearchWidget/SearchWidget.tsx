import { RootContext }                                from '@data/context'
import { Game, Genre, Publisher, Tag }                from '@data/types'
import { GenreService, PublisherService, TagService } from '@src/services'
import * as React                                     from 'react'
import { useContext, useEffect, useState }            from 'react'
import { Form, Link, useNavigate }                    from 'react-router-dom'
import style
													  from './SearchWidget.module.scss'


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

function SearchForm() {
	const { apiMiddleware, setGames } = useContext(RootContext)

	const navigator = useNavigate()

	const search = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const data      = new FormData(e.target as HTMLFormElement)
		const newSearch = data.get('search_content') as string

		if (!newSearch) return

		apiMiddleware?.getAll('games', { search: newSearch })
					 .then(apiData => setGames(apiData as Game[]))
		navigator('/search')

		setTimeout(() => window.location.assign('#search-header'), 200)
	}

	return (
		<Form method="get"
			  className={style.SearchForm}
			  action="/search"
			  onSubmit={search}
		>
			<label className={style.Label}
				   htmlFor="search_content"
			>Keyword</label>

			<input className={style.Search}
				   type="search"
				   id="search_content"
				   name="search_content"
			/>

			<button className={`primary ${style.Submit}`}
					type="submit"
			>
				Search
			</button>
		</Form>
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
