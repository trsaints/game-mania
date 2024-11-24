import style from '@views/components/GamePageList/GamePageList.module.scss'
import { IPageSwitch } from '@views/components/PageSwitch/IPageSwitch.ts'
import { PageSwitchViewModel } from '@src/view-models/PageSwitchViewModel.ts'


const viewModel = new PageSwitchViewModel()

export function PageSwitch(props: IPageSwitch) {
	const { pageIndices, setCurrentPage } = props

	const pageButtons = pageIndices.map(
		pageIndex => (
			<li key={`page-${pageIndex}`}>
				<button data-page={pageIndex} type="button">
					{pageIndex + 1}
				</button>
			</li>
		))

	return (
		<menu className={style.PageSelection}
			  onClick={(e) => viewModel.changePage(e, setCurrentPage)}>
			{pageButtons}
		</menu>
	)
}