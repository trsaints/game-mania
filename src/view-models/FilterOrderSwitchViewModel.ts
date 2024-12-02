import {
	IFilterOrderSwitchViewModel
} from '@src/view-models/IFilterOrderSwitchViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'


export { FilterOrderSwitchViewModel }

class FilterOrderSwitchViewModel implements IFilterOrderSwitchViewModel {
	switchFilterOrder(e: React.MouseEvent<HTMLFieldSetElement>,
					  setOrder: Dispatch<SetStateAction<'asc' | 'desc'>>): void {
		const target = e.target as HTMLInputElement

		if (! target || ! target.value) return

		setOrder(target.value as 'asc' | 'desc')
	}
}