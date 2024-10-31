import { Dispatch, SetStateAction, useEffect } from 'react'
import { Game, Genre, Recommended } from '@data/types'
import { IRootContext } from '@data/context'


export function useHomePage(context: IRootContext,
							setRecommended: Dispatch<SetStateAction<Recommended | undefined>>
) {
	const { apiMiddleware, setGames, setGenres } = context

	useEffect(() => {
		apiMiddleware?.getAll('games')
					 .then(gameData => setGames(gameData as Game[]))
		apiMiddleware?.getAll('genres', { pageSize: 10 })
					 .then(genreData => setGenres(genreData as Genre[]))
		apiMiddleware?.getRecommendations()
					 .then(recommendedData => setRecommended(recommendedData))
	}, [])
}