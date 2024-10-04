import { createContext } from 'react'
import { IGameContext }  from '@data/context'


const GameContext = createContext<IGameContext>({
													games          : [],
													gameSearch     : '',
													setSelectedGame: () => {},
													setGameSearch  : () => {}
												})

export { GameContext }