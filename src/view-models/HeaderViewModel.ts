import {
	IHeaderViewModel
} from '@src/view-models/interfaces/IHeaderViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'
import styles from '@views/components/Header/Header.module.scss'


export { HeaderViewModel }

class HeaderViewModel implements IHeaderViewModel {
	closeOnClick(setIsMenuOpen: Dispatch<SetStateAction<boolean>>): void {
		const menu = document.querySelector('[data-dialog="main-menu"]') as HTMLDialogElement

		if (! menu) return

		menu.classList.add(styles.dialogClose)

		setTimeout(() => {
			setIsMenuOpen(false)
			menu.classList.remove(styles.dialogClose)
			menu.close()
		}, 150)
	}

	closeOnRouteChange(e: React.MouseEvent<HTMLElement, MouseEvent>,
					   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void {
		const target    = e.target as HTMLElement
		const routeLink = target.closest('[data-link="route"]')

		if (! routeLink) return

		const menu = document.querySelector('[data-dialog="main-menu"]') as HTMLDialogElement

		if (! menu) return

		menu.classList.add(styles.dialogClose)

		setTimeout(() => {
			setIsMenuOpen(false)
			menu.classList.remove(styles.dialogClose)
			menu.close()
		}, 150)
	}


	closeOnEscape(e: React.KeyboardEvent<HTMLDialogElement>,
				  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void {
		if (e.key !== 'Escape') return

		e.preventDefault()

		const menu = document.querySelector('[data-dialog="main-menu"]') as HTMLDialogElement
		menu.classList.add(styles.dialogClose)

		setTimeout(() => {
			setIsMenuOpen(false)
			menu.classList.remove(styles.dialogClose)
			menu.close()
		}, 150)
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