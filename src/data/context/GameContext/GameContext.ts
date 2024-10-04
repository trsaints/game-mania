import { IGameContext }  from '@data/context'
import { createContext } from 'react'


const GameContext = createContext<IGameContext>({
													games          : [],
													gameSearch     : '',
													setSelectedGame: () => {},
													setGameSearch  : () => {}
												})

export { GameContext }