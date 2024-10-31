import { Genre, Publisher, Tag } from '@data/types'
import { useContext, useEffect, useState } from 'react'
import style from './SearchWidget.module.scss'
import { SearchForm } from '@views/components/SearchForm/SearchForm.tsx'
import { SearchNavbar } from '@views/components/SearchNavbar/SearchNavbar.tsx'
import { ISearchNavbar } from '@views/components/SearchNavbar/ISearchNavbar.tsx'
import { RootContext } from '@data/context'


export { SearchWidget }

function SearchWidget() {
	const [genres, setGenres]         = useState<Genre[]>([])
	const [tags, setTags]             = useState<Tag[]>([])
	const [publishers, setPublishers] = useState<Publisher[]>([])

	const searchNavbarProps: ISearchNavbar = {
		genres,
		tags,
		publishers
	}

	const { apiMiddleware } = useContext(RootContext)

	useEffect(() => {
		apiMiddleware?.getAll('genres', { pageSize: 5 })
					 .then(g => setGenres(g as Genre[]))

		apiMiddleware?.getAll('tags', { pageSize: 5 })
					 .then(t => setTags(t as Tag[]))

		apiMiddleware?.getAll('publishers', { pageSize: 5 })
					 .then(p => setPublishers(p as Publisher[]))
	}, [])

	return (
		<aside className={style.SearchWidget}>
			<SearchForm/>
			<SearchNavbar {...searchNavbarProps} />
		</aside>
	)
}

