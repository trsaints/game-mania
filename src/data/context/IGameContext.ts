import { Game }                     from '@data/types'
import { Dispatch, SetStateAction } from 'react'


export interface IGameContext {
	games: Game[]
	gameSearch: string
	selectedGame?: Game
	setSelectedGame: Dispatch<SetStateAction<Game | undefined>>
	setGameSearch: Dispatch<SetStateAction<string>>
}