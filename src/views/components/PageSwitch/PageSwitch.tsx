import style from '@views/components/GamePageList/GamePageList.module.scss'
import {
	IGamePageListViewModel
} from '@src/view-models/interfaces/IGamePageListViewModel.ts'
import { Dispatch, SetStateAction } from 'react'


export interface IPageSwitch {
	pageIndices: number[]
	parentViewModel: IGamePageListViewModel
	setCurrentPage: Dispatch<SetStateAction<number>>
}

export function PageSwitch(props: IPageSwitch) {
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