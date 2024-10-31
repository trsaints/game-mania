import { Game } from '@src/data/types'
import { ISelectionViewModel } from '@src/view-models/ISelectionViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'


export { SelectionViewModel }

class SelectionViewModel implements ISelectionViewModel {
	filterByGenre(games: Game[], selectedGenre: string): Game[] {
		return games.filter(g => {
			return g.genres.findIndex(t => t.slug
										   === selectedGenre)
				   !== -1
		})
	}

	displayByGenre(e: React.MouseEvent,
				   setSelectedGenre: Dispatch<SetStateAction<string>>
	): void {
		const target   = e.target as HTMLElement
		const listItem = target.closest('[data-slug]') as HTMLLIElement

		if (! listItem) {
			return
		}

		setSelectedGenre(listItem.dataset['slug'] ?? '')
	}
}