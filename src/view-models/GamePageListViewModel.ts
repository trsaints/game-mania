import {
	IGamePageListViewModel
} from '@src/view-models/interfaces/IGamePageListViewModel.ts'
import React, { Dispatch, FormEvent, SetStateAction } from 'react'
import { NavigateFunction } from 'react-router-dom'


export { GamePageListViewModel }

class GamePageListViewModel implements IGamePageListViewModel {
	openGamePage(e: React.MouseEvent, navigator: NavigateFunction): void {
		const target       = e.target as HTMLElement
		const selectedCard = target.closest('[data-id]') as HTMLElement

		if (! selectedCard) return

		navigator(`/search/${selectedCard.dataset['id']}`)

		setTimeout(() => {
			const pageHeader = document.getElementById("game-page")

			if (pageHeader) {
				pageHeader.scrollIntoView({ behavior: 'smooth' })
			}
		}, 200)
	}

	changeItemCount(e: FormEvent,
					setItemCount: Dispatch<SetStateAction<number>>
	): void {
		e.preventDefault()

		const targetData = new FormData(e.target as HTMLFormElement)
		const newCount   = Number(targetData.get('item-count'))

		if (! newCount) return

		setItemCount(newCount)
	}


}