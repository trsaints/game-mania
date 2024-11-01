import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import { Game } from '@data/types'


export interface ISelectionViewModel {
	displayByGenre(e: React.MouseEvent,
				   setSelectedGenre: Dispatch<SetStateAction<string>>
	): void

	filterByGenre(games: Game[], selectedGenre: string): Game[]
}