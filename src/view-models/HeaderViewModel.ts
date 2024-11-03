import { IHeaderViewModel } from '@src/view-models/IHeaderViewModel.ts'
import { Dispatch, SetStateAction } from 'react'


export { HeaderViewModel }

class HeaderViewModel implements IHeaderViewModel {
    toggleButtonText(isMenuOpen: boolean): string {
        return isMenuOpen ? 'Close Menu' : 'Open Menu'
    }

	toggleMenu(isMenuOpen: boolean,
			   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	): void {
		setIsMenuOpen(! isMenuOpen)
	}
}