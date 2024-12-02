import React, { Dispatch, SetStateAction } from 'react'


export interface IFilterOrderSwitchViewModel {
	switchFilterOrder(e: React.MouseEvent<HTMLFieldSetElement>,
					  setOrder: Dispatch<SetStateAction<'asc' | 'desc'>>): void
}