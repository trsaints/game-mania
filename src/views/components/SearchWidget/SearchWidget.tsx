import { Genre, Publisher, Tag } from '@data/types'
import { useContext, useState } from 'react'
import style from './SearchWidget.module.scss'
import { SearchForm } from '@views/components/SearchForm/SearchForm.tsx'
import { SearchNavbar } from '@views/components/SearchNavbar/SearchNavbar.tsx'
import { ISearchNavbar } from '@views/components/SearchNavbar/ISearchNavbar.tsx'
import { RootContext } from '@data/context'
import { useSearchFilters } from '@src/hooks/useSearchFilters.ts'


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

	useSearchFilters(apiMiddleware, { setGenres, setTags, setPublishers })

	return (
		<aside className={style.SearchWidget}>
			<SearchForm/>
			<SearchNavbar {...searchNavbarProps} />
		</aside>
	)
}

