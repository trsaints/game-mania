import {
	IHeaderViewModel
} from '@src/view-models/interfaces/IHeaderViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'


export { HeaderViewModel }

class HeaderViewModel implements IHeaderViewModel {
	closeOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>,
				 setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void {
		const target = e.target as HTMLElement
		const routeLink = target.closest('[data-link="route"]')

		if (! routeLink) return

		const menu = document.querySelector('[data-dialog="main-menu"]') as HTMLDialogElement

		if (! menu) return

		menu.close()
		setIsMenuOpen(false)
	}


	closeOnEscape(e: React.KeyboardEvent<HTMLDialogElement>,
				  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void {
		if (e.key !== 'Escape') return

		setIsMenuOpen(false)
	}


	toggleButtonText(isMenuOpen: boolean): string {
		return isMenuOpen ? 'Close Menu' : 'Open Menu'
	}

	toggleMenu(isMenuOpen: boolean,
			   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void {
		setIsMenuOpen(! isMenuOpen)

		if (isMenuOpen) return

		const menu = document.querySelector('[data-dialog="main-menu"]') as HTMLDialogElement

		if (! menu) return

		menu.showModal()
	}
}