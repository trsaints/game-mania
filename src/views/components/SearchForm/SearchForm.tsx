import * as React from 'react'
import { useContext } from 'react'
import { RootContext } from '@data/context'
import { Form, useNavigate } from 'react-router-dom'
import { Game } from '@data/types'
import style from '@views/components/SearchWidget/SearchWidget.module.scss'


export function SearchForm() {
	const { apiMiddleware, setGames } = useContext(RootContext)

	const navigator = useNavigate()

	const search = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const data      = new FormData(e.target as HTMLFormElement)
		const newSearch = data.get('search_content') as string

		if (! newSearch) return

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