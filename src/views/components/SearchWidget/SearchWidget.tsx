import { Genre, InlineBannerStyle, Publisher, Tag } from '@data/types'
import { useContext, useState } from 'react'
import style from './SearchWidget.module.scss'
import { SearchForm } from '@views/components/SearchForm/SearchForm.tsx'
import { SearchMenu } from '@views/components/SearchNavbar/SearchMenu.tsx'
import { ISearchMenu } from '@views/components/SearchNavbar/ISearchMenu.ts'
import { RootContext } from '@data/context'
import { useSearchSuggestions } from '@src/hooks/useSearchSuggestions.ts'
import { StylingUtils } from '@src/utils'


export { SearchWidget }

function SearchWidget() {
	const [genres, setGenres]               = useState<Genre[]>([])
	const [tags, setTags]                   = useState<Tag[]>([])
	const [publishers, setPublishers]       = useState<Publisher[]>([])
	const [currentBanner, setCurrentBanner] = useState<InlineBannerStyle>({ background: 'none' })

	const searchNavbarProps: ISearchMenu = {
		genres,
		tags,
		publishers
	}

	const { apiMiddleware } = useContext(RootContext)

	useSearchSuggestions(apiMiddleware,
						 {
							 setGenres,
							 setTags,
							 setPublishers,
							 setCurrentBanner
						 },
						 new StylingUtils()
	)

	return (
		<aside className={style.SearchWidget} style={currentBanner}>
			<SearchForm/>

			<section>
				<h2 className={style.SearchMenuHeader}>search by</h2>
				<SearchMenu {...searchNavbarProps} />
			</section>
		</aside>
	)
}

