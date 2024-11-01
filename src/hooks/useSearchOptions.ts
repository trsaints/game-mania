import { Dispatch, SetStateAction, useEffect } from 'react'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { IRootContext } from '@data/context'


export type SearchOptionsStates = {
	setPublishers: Dispatch<SetStateAction<Publisher[] | undefined>>
	setPlatforms: Dispatch<SetStateAction<Platform[] | undefined>>
	setTags: Dispatch<SetStateAction<Tag[] | undefined>>
	setGenres: Dispatch<SetStateAction<Genre[] | undefined>>
	setGames: Dispatch<SetStateAction<Game[] | undefined>>
}

export function useSearchOptions(context: IRootContext
) {
	const {
			  apiMiddleware,
			  games,
			  setPublishers,
			  setPlatforms,
			  setTags,
			  setGenres,
			  setGames
		  } = context

	useEffect(() => {
		apiMiddleware?.getAll('publishers', {})
					 .then(apiData => setPublishers(apiData as Publisher[]))

		apiMiddleware?.getAll('platforms', {})
					 .then(apiData => setPlatforms(apiData as Platform[]))

		apiMiddleware?.getAll('tags', {})
					 .then(apiData => setTags(apiData as Tag[]))

		apiMiddleware?.getAll('genres', {})
					 .then(apiData => setGenres(apiData as Genre[]))

		if (games) {
			return
		}

		apiMiddleware?.getAll('games', { pageSize: 100, metacritic: '80,100' })
					 .then(apiData => setGames(apiData as Game[]))
	}, [])

}