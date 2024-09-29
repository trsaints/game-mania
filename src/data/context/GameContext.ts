import { createContext } from 'react'
import { IGameContext }  from './IGameContext'

const GameContext = createContext<IGameContext>({
													games          : [],
													gameSearch: '',
													setSelectedGame: () => {},
													setGameSearch: () => {}
												})

export { GameContext }