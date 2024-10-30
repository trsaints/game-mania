import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'


export interface ISelectionViewModel {
	filterByGenre(e: React.MouseEvent,
				  setSelectedGenre: Dispatch<SetStateAction<string>>
	): void
}