import { IRootContext } from '@data/context'
import { createContext } from 'react'


const RootContext = createContext<IRootContext>({
													setGenres      : () => {},
													setGames       : () => {},
													setSelectedGame: () => {},
													setPlatforms   : () => {},
													setPublishers  : () => {},
													setTags        : () => {}
												})

export { RootContext }