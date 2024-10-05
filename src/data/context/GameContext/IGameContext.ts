import { GameData }                 from '@data/types'
import { Dispatch, SetStateAction } from 'react'


export interface IGameContext {
	games: GameData[]
	gameSearch: string
	selectedGame?: GameData
	setSelectedGame: Dispatch<SetStateAction<GameData | undefined>>
	setGameSearch: Dispatch<SetStateAction<string>>
}