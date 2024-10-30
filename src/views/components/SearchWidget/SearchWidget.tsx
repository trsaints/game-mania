import { Genre, Publisher, Tag } from '@data/types'
import { GenreService, PublisherService, TagService } from '@src/services'
import { useEffect, useState } from 'react'
import style from './SearchWidget.module.scss'
import { SearchForm } from '@views/components/SearchForm/SearchForm.tsx'
import {
	SearchNavbar
} from '@views/components/SearchNavbar/SearchNavbar.tsx'
import { ISearchNavbar } from '@views/components/SearchNavbar/ISearchNavbar.tsx'


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

