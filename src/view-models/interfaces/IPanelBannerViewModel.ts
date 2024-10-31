import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'


export interface IPanelBannerViewModel {
	selectImage(e: React.MouseEvent<HTMLElement>,
				setCurrentIndex: Dispatch<SetStateAction<number>>
	): void
}