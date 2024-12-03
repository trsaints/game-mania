import {
	IGamePageListViewModel
} from '@src/view-models/interfaces/IGamePageListViewModel.ts'
import React, { Dispatch, FormEvent, SetStateAction } from 'react'
import style from '@views/components/GamePanel/GamePanel.module.scss'


export { GamePageListViewModel }

class GamePageListViewModel implements IGamePageListViewModel {
	openGamePage(e: React.MouseEvent): void {
		const target       = e.target as HTMLElement
		const selectedCard = target.closest('[data-id]') as HTMLElement

		if (! selectedCard) return

		setTimeout(() => {
			const pageHeader = document.getElementById('game-page')

			if (pageHeader) {
				pageHeader.scrollIntoView({ behavior: 'instant' })
			}
		}, 200)

		const gamePanel = document.getElementById('game-panel')

		if (! gamePanel) return

		gamePanel.classList.add(style.SetPlaceholder)

		setTimeout(() => {
			gamePanel.classList.remove(style.SetPlaceholder)
		}, 2000)
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