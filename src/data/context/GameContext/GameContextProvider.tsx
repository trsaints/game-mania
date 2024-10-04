import { GameContext, IGameContext }              from '@data/context'
import { Game }                                   from '@data/types'
import { GameService }                            from '@src/services'
import { PropsWithChildren, useEffect, useState } from 'react'


function GameContextProvider({ children }: PropsWithChildren) {
	const [games, setGames]               = useState<Game[]>([])
	const [selectedGame, setSelectedGame] = useState<Game | undefined>()
	const [gameSearch, setGameSearch]     = useState<string>('')

	useEffect(() => {
		GameService.getGames({ metacritic: '90,100' })
				   .then(games => setGames(games))
	}, [])

	const context: IGameContext = {
		games,
		selectedGame,
		gameSearch,
		setSelectedGame,
		setGameSearch
	}

	return (
		<GameContext.Provider value={context}>
			{children}
		</GameContext.Provider>
	)
}

export { GameContextProvider }