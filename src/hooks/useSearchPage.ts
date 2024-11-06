import { useEffect } from 'react'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { IRootContext } from '@data/context'


export function useSearchPage(context: IRootContext
) {
	const {
			  apiMiddleware,
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

		apiMiddleware?.getAll('games', { metacritic: '80,100' })
					 .then((apiData) => setGames(apiData as Game[]))
	}, [])
}