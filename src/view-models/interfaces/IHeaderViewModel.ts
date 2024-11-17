import React, { Dispatch, SetStateAction } from 'react'


export interface IHeaderViewModel {
	toggleMenu(isMenuOpen: boolean,
			   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void

	toggleButtonText(isMenuOpen: boolean): string

	closeOnEscape(
		e: React.KeyboardEvent<HTMLDialogElement>,
		setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void

	closeOnClick(
		e: React.MouseEvent<HTMLElement, MouseEvent>,
		setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void
}