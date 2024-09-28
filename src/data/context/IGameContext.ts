import { Game }                     from '@data/types'
import { Dispatch, SetStateAction } from 'react'


export interface IGameContext {
	games: Game[]
	selectedGame?: Game
	setSelectedGame: Dispatch<SetStateAction<Game | undefined>>
}