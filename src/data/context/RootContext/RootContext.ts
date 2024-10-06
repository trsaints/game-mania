import { IRootContext }  from '@data/context'
import { createContext } from 'react'


const RootContext = createContext<IRootContext>({
													setGenres      : () => {},
													setGameSearch  : () => {},
													setGames       : () => {},
													setSelectedGame: () => {}
												})

export { RootContext }