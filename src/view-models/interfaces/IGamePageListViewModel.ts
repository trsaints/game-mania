import React, { Dispatch, FormEvent, SetStateAction } from 'react'
import { NavigateFunction } from 'react-router-dom'


export interface IGamePageListViewModel {
	openGamePage(e: React.MouseEvent, navigator: NavigateFunction): void

	changeItemCount(e: FormEvent,
					setItemCount: Dispatch<SetStateAction<number>>
	): void

	changePage(e: React.MouseEvent,
			   setCurrentPage: Dispatch<SetStateAction<number>>
	): void


}