import { Dispatch, SetStateAction, useEffect } from 'react'
import { Game } from '@data/types'
import { IRootContext } from '@data/context'
import { GameId } from '@data/types/GameId.ts'


export function useGamePage(context: IRootContext,
							searchParams: GameId,
							setSelectedGame: Dispatch<SetStateAction<Game | undefined>>,
							gameGenres: string | undefined
) {
	const { apiMiddleware, setGames } = context

	useEffect(() => {
		apiMiddleware?.getById('games', Number(searchParams.id)).then(game => {
			setSelectedGame(game as Game)
		})
		apiMiddleware?.getAll('games', { genres: gameGenres }).then(games => {
			setGames(games as Game[])
		})
	}, [searchParams])
}