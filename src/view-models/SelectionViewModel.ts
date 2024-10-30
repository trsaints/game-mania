import { ISelectionViewModel } from '@src/view-models/ISelectionViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'


export { SelectionViewModel }

class SelectionViewModel implements ISelectionViewModel {
	filterByGenre(e: React.MouseEvent,
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