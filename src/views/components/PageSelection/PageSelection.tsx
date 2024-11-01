import style from '@views/components/GamePageList/GamePageList.module.scss'
import {
	IPageSelection
} from '@views/components/PageSelection/IPageSelection.ts'


export function PageSelection(props: IPageSelection) {
	const {
			  gamesCount,
			  itemCount,
			  setCurrentPage,
			  viewModel
		  }            = props
	const pageCount    = gamesCount / itemCount
	const isEqualCount = gamesCount % itemCount === 0
	const pageButtons  = Array.from({
										length: pageCount > 1
												? isEqualCount
												  ? pageCount
												  : pageCount + 1
												: 1
									},
									(_, i) => i
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