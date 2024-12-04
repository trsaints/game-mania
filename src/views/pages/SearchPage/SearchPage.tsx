import style from './SearchPage.module.scss'
import {
	CountFilter, GamePageList, PageSelection, SearchControls
} from '@views/components'
import { useContext } from 'react'
import { RootContext } from '@data/context'
import { usePageList } from '@src/hooks/usePageList.ts'
import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'
import { useSearchPage } from '@src/hooks/useSearchPage.ts'
import { useFilterStates } from '@src/hooks/useFilterStates.ts'


export { SearchPage }

function SearchPage() {
	const rootContext = useContext(RootContext)
	const pageStates  = usePageList()

	const filterStates = useFilterStates()

	useSearchPage(useContext(RootContext),
				  filterStates.order,
				  filterStates.filters)

	const { games }         = rootContext
	const pageListViewModel = new GamePageListViewModel()

	return (
		<div className={style.SearchPage}>
			{games && (
				<GamePageList.Root games={games}>
					<CountFilter onHandleSubmit={(e) => {
						pageListViewModel.changeItemCount(e,
														  pageStates.setItemCount)
					}}/>
					<SearchControls {...rootContext} filterStates={filterStates}/>
					<GamePageList.ListResults games={games}
											  {...pageStates}
											  viewModel={pageListViewModel}/>
					<PageSelection gamesCount={games.length}
								   {...pageStates}
								   parentViewModel={pageListViewModel}/>
				</GamePageList.Root>
			)}
		</div>
	)
}

