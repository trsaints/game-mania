import {
	IPanelBannerViewModel
} from '@src/view-models/interfaces/IPanelBannerViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'


export { PanelBannerViewModel }

class PanelBannerViewModel implements IPanelBannerViewModel {
	selectImage(e: React.MouseEvent<HTMLElement>,
				setCurrentIndex: Dispatch<SetStateAction<number>>
	): void {
		const target   = e.target as HTMLElement
		const listItem = target.closest('[data-index]') as HTMLLIElement

		if (! listItem) return

		const parsedIndex = listItem.dataset['index'] as unknown
		setCurrentIndex(parsedIndex as number)
	}
}