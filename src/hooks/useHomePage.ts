import { Dispatch, SetStateAction, useEffect } from 'react'
import { Game, Genre, Recommended } from '@data/types'
import { IRootContext } from '@data/context'


export function useHomePage(context: IRootContext,
							setRecommended: Dispatch<SetStateAction<Recommended | undefined>>
) {
	const { apiMiddleware, setGames, setGenres } = context

	useEffect(() => {
		console.log('loading Home page data')

		apiMiddleware?.getAll('games', { pageSize: 40, metacritic: '90,100' })
					 .then(gameData => setGames(gameData as Game[]))
		apiMiddleware?.getAll('genres', { pageSize: 10 })
					 .then(genreData => setGenres(genreData as Genre[]))
		apiMiddleware?.getRecommendations()
					 .then(recommendedData => setRecommended(recommendedData))
	}, [])
}