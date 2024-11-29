import {
	IPanelBannerViewModel
} from '@src/view-models/interfaces/IPanelBannerViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'
import styles from '@views/components/ImageCard/ImageCard.module.scss'

export { PanelBannerViewModel }

class PanelBannerViewModel implements IPanelBannerViewModel {
	selectImage(e: React.MouseEvent<HTMLElement>,
				setCurrentIndex: Dispatch<SetStateAction<number>>
	): void {
		const target    = e.target as HTMLElement
		const listItem  = target.closest('[data-index]') as HTMLLIElement
		const container = target.closest('[data-banner="container"]') as HTMLElement
		const mainBanner = container.querySelector('[data-banner="main"]') as HTMLElement

		if (! listItem || ! mainBanner) return

		const parsedIndex = listItem.dataset['index'] as unknown

		mainBanner.classList.add(styles.setPlaceholder)

		setTimeout(() => {
			setCurrentIndex(parsedIndex as number)
			mainBanner.classList.remove(styles.setPlaceholder)
		}, 200)
	}
}