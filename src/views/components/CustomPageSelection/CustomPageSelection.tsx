import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'
import { Dispatch, SetStateAction } from 'react'
import style from '@views/components/GamePageList/GamePageList.module.scss'


export interface ICustomPageSelection {
	parentViewModel: GamePageListViewModel
	setCurrentPage: Dispatch<SetStateAction<number>>
	pageIndices: number[]
}

export function CustomPageSelection(props: ICustomPageSelection) {
	const { parentViewModel, setCurrentPage, pageIndices } = props

	return (
		<form className={style.CustomPageSelection} onSubmit={(e) => {
			parentViewModel.changeCustomPage(e,
											 setCurrentPage,
											 pageIndices.length)
		}}>
			<p>
				<label htmlFor="custom-page">enter page: </label>
				<input type="tel" name="custom-page" id="custom-page"/>
			</p>

			<button type="submit">save</button>
		</form>
	)
}