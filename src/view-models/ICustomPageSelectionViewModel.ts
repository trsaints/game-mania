import { Dispatch, FormEvent, SetStateAction } from 'react'


export interface ICustomPageSelectionViewModel {
	changeCustomPage(e: FormEvent,
					 setCurrentPage: Dispatch<SetStateAction<number>>,
					 pageCount: number
	): void
}