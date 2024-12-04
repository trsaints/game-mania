import { Game } from '@src/data/types'
import {
	ISelectionViewModel
} from '@src/view-models/interfaces/ISelectionViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'
import style from '@views/components/Selection/Selection.module.scss'


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

		const slug = listItem.dataset['slug'] as string

		setSelectedGenre(slug)
		this.highlightSelectedGenre(slug)
	}

	highlightSelectedGenre(slug: string): void {
		const genreList = document.querySelectorAll('[data-slug]')

		genreList.forEach((li) => {
			const target = li as HTMLElement
			const button = target.querySelector('button') as HTMLButtonElement

			if (! button) return

			if (target.dataset['slug'] === slug) {
				button.classList.add(style.Selected)
			} else {
				button.classList.remove(style.Selected)
			}
		})
	}
}