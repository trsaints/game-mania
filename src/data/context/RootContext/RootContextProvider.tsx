import { IRootContext, RootContext }   from '@data/context'
import { Game, Genre }                 from '@data/types'
import { GameService }                 from '@src/services'
import { PropsWithChildren, useState } from 'react'


function RootContextProvider({ children }: PropsWithChildren) {
	const [games, setGames]               = useState<Game[]>()
	const [genres, setGenres]             = useState<Genre[]>()
	const [selectedGame, setSelectedGame] = useState<Game>()
	const [gameSearch, setGameSearch]     = useState<string>()

	const context: IRootContext = {
		games,
		genres,
		selectedGame,
		gameSearch,
		gameService: GameService,
		setSelectedGame,
		setGameSearch,
		setGames,
		setGenres
	}

	return (
		<RootContext.Provider value={context}>
			{children}
		</RootContext.Provider>
	)
}

export { RootContextProvider }