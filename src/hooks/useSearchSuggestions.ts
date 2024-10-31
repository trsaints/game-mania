import { Dispatch, SetStateAction, useEffect } from 'react'
import { Genre, Publisher, Tag } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'


export type SearchStates = {
	setGenres: Dispatch<SetStateAction<Genre[]>>
	setTags: Dispatch<SetStateAction<Tag[]>>
	setPublishers: Dispatch<SetStateAction<Publisher[]>>
}

export function useSearchSuggestions(apiMiddleware: IApiMiddleware | undefined,
									 searchStates: SearchStates
) {
	const { setGenres, setTags, setPublishers } = searchStates

	useEffect(() => {
		apiMiddleware?.getAll('genres', { pageSize: 5 })
					 .then(g => setGenres(g as Genre[]))

		apiMiddleware?.getAll('tags', { pageSize: 5 })
					 .then(t => setTags(t as Tag[]))

		apiMiddleware?.getAll('publishers', { pageSize: 5 })
					 .then(p => setPublishers(p as Publisher[]))
	}, [])
}