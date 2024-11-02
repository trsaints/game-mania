import { Dispatch, SetStateAction } from 'react'


export interface IHeaderViewModel {
	toggleMenu(isMenuOpen: boolean,
			   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void

	toggleButtonText(isMenuOpen: boolean): string
}