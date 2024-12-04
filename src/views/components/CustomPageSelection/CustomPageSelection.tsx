import {
	ICustomPageSelection
} from '@views/components/CustomPageSelection/ICustomPageSelection.ts'
import {
	CustomPageSelectionViewModel
} from '@src/view-models/CustomPageSelectionViewModel.ts'
import style from './CustomPageSelection.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


const viewModel = new CustomPageSelectionViewModel()

export function CustomPageSelection(props: ICustomPageSelection) {
	const { setCurrentPage, pageCount } = props

	return (
		<form className={style.CustomPageSelection} onSubmit={(e) => {
			viewModel.changeCustomPage(e, setCurrentPage, pageCount)
		}}>
			<p>
				<label htmlFor="custom-page">enter page: </label>
				<input type="tel" name="custom-page" id="custom-page"/>
			</p>

			<button type="submit">
				save
				<FontAwesomeIcon icon={faArrowsRotate} className='icon--right' />
			</button>
		</form>
	)
}