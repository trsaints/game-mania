import { IHeaderViewModel } from '@src/view-models/IHeaderViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'


export { HeaderViewModel }

class HeaderViewModel implements IHeaderViewModel {
	closeOnEscape(e: React.KeyboardEvent<HTMLDialogElement>,
				  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void {
		const target = e.target as HTMLDialogElement

		if (e.key !== 'Escape' || ! target.open) return

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