import style from '@views/components/GamePageList/GamePageList.module.scss'
import {
	ICustomPageSelection
} from '@views/components/CustomPageSelection/ICustomPageSelection.tsx'


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