import React, { Dispatch, SetStateAction } from 'react'


export interface IPageSwitchViewModel {
	changePage(e: React.MouseEvent,
			   setCurrentPage: Dispatch<SetStateAction<number>>
	): void

}