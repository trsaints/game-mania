import {
	ICustomPageSelectionViewModel
} from '@src/view-models/ICustomPageSelectionViewModel.ts'
import { Dispatch, FormEvent, SetStateAction } from 'react'


export { CustomPageSelectionViewModel }

class CustomPageSelectionViewModel implements ICustomPageSelectionViewModel {
	changeCustomPage(e: FormEvent,
					 setCurrentPage: Dispatch<SetStateAction<number>>,
					 pageCount: number): void {
		e.preventDefault()

		const targetData = new FormData(e.target as HTMLFormElement)
		const newPage    = Number(targetData.get('custom-page'))

		if (! newPage || newPage > pageCount || newPage < 1) return

		setCurrentPage(newPage - 1)
	}
}