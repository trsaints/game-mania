import style from '@views/components/GamePageList/GamePageList.module.scss'
import {
	ICustomPageSelection
} from '@views/components/CustomPageSelection/ICustomPageSelection.tsx'
import {
	CustomPageSelectionViewModel
} from '@src/view-models/CustomPageSelectionViewModel.ts'

const viewModel = new CustomPageSelectionViewModel()

export function CustomPageSelection(props: ICustomPageSelection) {
	const { setCurrentPage, pageIndices } = props

	return (
		<form className={style.CustomPageSelection} onSubmit={(e) => {
			viewModel.changeCustomPage(e,
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