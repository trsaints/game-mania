import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Game } from '@data/types'


export interface IFilterSortViewModel {
	sortResults(e: ChangeEvent,
				setGames: Dispatch<SetStateAction<Game[] | undefined>>): void
}