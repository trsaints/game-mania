import { useEffect } from 'react'
import { Game, Genre, Publisher, Tag } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'
import { IStylingUtils } from '@src/utils'
import { SearchStates } from '@data/types/SearchStates.ts'


export function useSearchSuggestions(apiMiddleware: IApiMiddleware | undefined,
									 searchStates: SearchStates,
									 stylingUtils: IStylingUtils
) {
	const { setGenres, setTags, setPublishers, setCurrentBanner } = searchStates

	useEffect(() => {
		const randomId = Math.floor(Math.random() * 1000)

		apiMiddleware?.getById('games', randomId).then(game => {
			setCurrentBanner(stylingUtils.getInlineBanner(0.9, game as Game))
		})

		apiMiddleware?.getAll('genres', { pageSize: 5 })
					 .then(g => setGenres(g as Genre[]))

		apiMiddleware?.getAll('tags', { pageSize: 5 })
					 .then(t => setTags(t as Tag[]))

		apiMiddleware?.getAll('publishers', { pageSize: 5 })
					 .then(p => setPublishers(p as Publisher[]))
	}, [])
}