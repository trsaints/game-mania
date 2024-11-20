import { useEffect } from 'react'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { IRootContext } from '@data/context'
import { DataRequestParams } from '@data/request-parameters'


export function useSearchPage(context: IRootContext,
							  gameFilters?: DataRequestParams) {
	const {
			  apiMiddleware,
			  setPublishers,
			  setPlatforms,
			  setTags,
			  setGenres,
			  setGames
		  } = context

	useEffect(() => {
		console.log('loading Search page data')

		apiMiddleware?.getAll('publishers')
					 .then(apiData => setPublishers(apiData as Publisher[]))

		apiMiddleware?.getAll('platforms')
					 .then(apiData => setPlatforms(apiData as Platform[]))

		apiMiddleware?.getAll('tags')
					 .then(apiData => setTags(apiData as Tag[]))

		apiMiddleware?.getAll('genres')
					 .then(apiData => setGenres(apiData as Genre[]))

		apiMiddleware?.getAll('games', { metacritic: '80,100', ...gameFilters })
					 .then((apiData) => setGames(apiData as Game[]))
	}, [gameFilters])
}