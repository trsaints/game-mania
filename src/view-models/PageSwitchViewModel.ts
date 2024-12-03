import { IPageSwitchViewModel } from '@src/view-models/IPageSwitchViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'


export { PageSwitchViewModel }

class PageSwitchViewModel implements IPageSwitchViewModel {
	changePage(e: React.MouseEvent,
			   setCurrentPage: Dispatch<SetStateAction<number>>
	): void {
		const target        = e.target as HTMLMenuElement
		const pressedButton = target.closest('[data-page]') as HTMLButtonElement

		if (! pressedButton) {
			return
		}

		setCurrentPage(Number(pressedButton.dataset['page']))

		setTimeout(() => {
			const pageHeader = document.getElementById('results-count')

			if (pageHeader) {
				pageHeader.scrollIntoView({ behavior: 'smooth' })
			}
		}, 200)
	}
}