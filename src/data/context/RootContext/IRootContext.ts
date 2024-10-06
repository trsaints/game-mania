import { Game, Genre }              from '@data/types'
import { IGameService }             from '@src/services'
import { Dispatch, SetStateAction } from 'react'


export interface IRootContext {
	games?: Game[]
	genres?: Genre[]
	gameSearch?: string
	selectedGame?: Game
	setSelectedGame: Dispatch<SetStateAction<Game | undefined>>
	setGameSearch: Dispatch<SetStateAction<string | undefined>>
	setGenres: Dispatch<SetStateAction<Genre[] | undefined>>
	setGames: Dispatch<SetStateAction<Game[] | undefined>>
	gameService?: IGameService
}