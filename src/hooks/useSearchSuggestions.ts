import { Dispatch, SetStateAction, useEffect } from 'react'
import { Game, Genre, InlineBannerStyle, Publisher, Tag } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'
import { StylingUtils } from '@src/utils'


export type SearchStates = {
	setGenres: Dispatch<SetStateAction<Genre[]>>
	setTags: Dispatch<SetStateAction<Tag[]>>
	setPublishers: Dispatch<SetStateAction<Publisher[]>>
	setCurrentBanner: Dispatch<SetStateAction<InlineBannerStyle>>
}

export function useSearchSuggestions(apiMiddleware: IApiMiddleware | undefined,
									 searchStates: SearchStates
) {
	const { setGenres, setTags, setPublishers, setCurrentBanner } = searchStates

	useEffect(() => {
		const randomId = Math.floor(Math.random() * 1000)

		apiMiddleware?.getById('games', randomId).then(game => {
			setCurrentBanner(StylingUtils.getInlineBanner(game as Game))
		})

		apiMiddleware?.getAll('genres', { pageSize: 5 })
					 .then(g => setGenres(g as Genre[]))

		apiMiddleware?.getAll('tags', { pageSize: 5 })
					 .then(t => setTags(t as Tag[]))

		apiMiddleware?.getAll('publishers', { pageSize: 5 })
					 .then(p => setPublishers(p as Publisher[]))
	}, [])
}