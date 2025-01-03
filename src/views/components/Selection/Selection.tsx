import { ISelection } from './ISelection'
import style from './Selection.module.scss'
import { useState } from 'react'
import { CountFilter, GamePageList, PageSelection } from '@views/components'
import { SelectionViewModel } from '@src/view-models/SelectionViewModel.ts'
import { GenreFilter } from '@views/components/GenreFilter/GenreFilter.tsx'
import { usePageList } from '@src/hooks/usePageList.ts'
import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'


export function Selection({ games, genres }: ISelection) {
	const viewModel         = new SelectionViewModel()
	const pageListViewModel = new GamePageListViewModel()

	const [selectedGenre, setSelectedGenre] = useState<string>('action')

	const pageStates    = usePageList()
	const filteredGames = viewModel.filterByGenre(games, selectedGenre)

	return (
		<article className={style.Selection}
				 onClick={(e) => viewModel.displayByGenre(e, setSelectedGenre)}>
			<h3 className={style.MainHeader}>navigate by genre</h3>

			<GenreFilter genres={genres}/>

			<GamePageList.Root games={filteredGames}>
				<CountFilter onHandleSubmit={(e) => {
					pageListViewModel.changeItemCount(e,
													  pageStates.setItemCount)
				}}/>
				<GamePageList.ListResults games={filteredGames}
										  {...pageStates}
										  viewModel={pageListViewModel}/>
				<PageSelection gamesCount={filteredGames.length}
							   {...pageStates}
							   parentViewModel={pageListViewModel}/>
			</GamePageList.Root>
		</article>)
}

