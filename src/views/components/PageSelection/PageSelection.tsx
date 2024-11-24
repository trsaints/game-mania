import {
	IPageSelection
} from '@views/components/PageSelection/IPageSelection.ts'
import {
	PageSelectionViewModel
} from '@src/view-models/PageSelectionViewModel.ts'
import {
	CustomPageSelection
} from '@views/components/CustomPageSelection/CustomPageSelection.tsx'
import style from '@views/components/GamePageList/GamePageList.module.scss'
import { Dispatch, SetStateAction } from 'react'
import {
	IGamePageListViewModel
} from '@src/view-models/interfaces/IGamePageListViewModel.ts'


const viewModel = new PageSelectionViewModel()

export function PageSelection(props: IPageSelection) {
	const { gamesCount, itemCount } = props

	const pageIndices = viewModel.getPageIndices(gamesCount, itemCount)

	return (
		<aside>
			<h3>navigate by page</h3>

			<PageSwitch pageIndices={pageIndices} {...props} />

			<CustomPageSelection {...props}
								 pageCount={pageIndices.length}/>
		</aside>
	)
}

export interface IPageSwitch {
	pageIndices: number[]
	parentViewModel: IGamePageListViewModel
	setCurrentPage: Dispatch<SetStateAction<number>>
}

function PageSwitch(props: IPageSwitch) {
	const { pageIndices, parentViewModel, setCurrentPage } = props

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
			  onClick={(e) => {
				  parentViewModel.changePage(e, setCurrentPage)
			  }}>
			{pageButtons}
		</menu>
	)
}