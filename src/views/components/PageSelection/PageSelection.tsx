import style from '@views/components/GamePageList/GamePageList.module.scss'
import {
	IPageSelection
} from '@views/components/PageSelection/IPageSelection.ts'
import {
	PageSelectionViewModel
} from '@src/view-models/PageSelectionViewModel.ts'


const pageSelectionViewModel = new PageSelectionViewModel()

export function PageSelection(props: IPageSelection) {
	const {
			  gamesCount,
			  itemCount,
			  setCurrentPage,
			  viewModel
		  } = props

	const pageButtons = pageSelectionViewModel.getPageIndices(gamesCount,
															  itemCount
	).map(
		pageIndex => (
			<li key={`page-${pageIndex}`}>
				<button data-page={pageIndex} type="button">{pageIndex
															 + 1}</button>
			</li>
		)
	)

	return (
		<menu className={style.PageSelection}
			  onClick={(e) => viewModel.changePage(e, setCurrentPage)}>
			{pageButtons}
		</menu>
	)
}