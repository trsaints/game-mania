import React, { Dispatch, FormEvent, SetStateAction } from 'react'


export interface IGamePageListViewModel {
	openGamePage(e: React.MouseEvent): void

	changeItemCount(e: FormEvent,
					setItemCount: Dispatch<SetStateAction<number>>
	): void
}