import { GameContext, IGameContext } from '@data/context'
import { GameData }                  from '@data/types'
import { GameService }               from '@src/services'
import { PropsWithChildren, useEffect, useState } from 'react'


function GameContextProvider({ children }: PropsWithChildren) {
	const [games, setGames]               = useState<GameData[]>([])
	const [selectedGame, setSelectedGame] = useState<GameData | undefined>()
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