import style from '@views/components/GamePageList/GamePageList.module.scss'
import {
	IPageSelection
} from '@views/components/PageSelection/IPageSelection.ts'
import {
	PageSelectionViewModel
} from '@src/view-models/PageSelectionViewModel.ts'
import {
	CustomPageSelection
} from '@views/components/CustomPageSelection/CustomPageSelection.tsx'


const viewModel = new PageSelectionViewModel()

export function PageSelection(props: IPageSelection) {
	const {
			  gamesCount,
			  itemCount,
			  setCurrentPage,
			  parentViewModel
		  } = props

	const pageIndices = viewModel.getPageIndices(gamesCount, itemCount)

	const pageButtons = pageIndices.map(
		pageIndex => (
			<li key={`page-${pageIndex}`}>
				<button data-page={pageIndex} type="button">{pageIndex
															 + 1}</button>
			</li>
		)
	)

	return (
		<aside>
			<h3>navigate by page</h3>

			<menu className={style.PageSelection}
				  onClick={(e) => {
					  parentViewModel.changePage(e, setCurrentPage)
				  }}>
				{pageButtons}
			</menu>

			<CustomPageSelection parentViewModel={parentViewModel}
								 setCurrentPage={setCurrentPage}
								 pageIndices={pageIndices}/>
		</aside>
	)
}
