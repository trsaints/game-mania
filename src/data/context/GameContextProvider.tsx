import { GameContext }                            from '@data/context/GameContext.ts'
import {
	IGameContext
}                                                 from '@data/context/IGameContext.ts'
import { Game }                                   from '@data/types'
import {
	GameService
}                                                 from '@services/GameService/GameService.ts'
import { PropsWithChildren, useEffect, useState } from 'react'


function GameContextProvider({children}: PropsWithChildren) {
	const [loadedGames, setLoadedGames]   = useState<Game[]>([])
	const [selectedGame, setSelectedGame] = useState<Game | undefined>()

	useEffect(() => {
		GameService.getGames().then(games => setLoadedGames(games))
	})

	const context: IGameContext = {
		games: loadedGames,
		selectedGame,
		setSelectedGame
	}

	return (<GameContext.Provider value={context}>
		{children}
	</GameContext.Provider>)
}

export { GameContextProvider }