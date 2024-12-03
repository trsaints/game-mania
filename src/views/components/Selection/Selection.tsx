import { ISelection } from './ISelection'
import style from './Selection.module.scss'
import { useState } from 'react'
import { CountFilter, GamePageList } from '@views/components'
import { SelectionViewModel } from '@src/view-models/SelectionViewModel.ts'
import { GenreFilter } from '@views/components/GenreFilter/GenreFilter.tsx'
import { usePageList } from '@src/hooks/usePageList.ts'
import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'


const viewModel = new SelectionViewModel()

export function Selection({ games, genres }: ISelection) {
	const [selectedGenre, setSelectedGenre] = useState<string>('action')
	const pageStates                        = usePageList()

	const filteredGames     = viewModel.filterByGenre(games, selectedGenre)
	const pageListViewModel = new GamePageListViewModel()

	return (
		<article className={style.Selection}
				 onClick={(e) => viewModel.displayByGenre(e, setSelectedGenre)}>
			<h3 className={style.MainHeader}>Navigate by genre</h3>

			<GenreFilter genres={genres}/>

			<GamePageList.Root games={filteredGames}>
				<CountFilter onHandleSubmit={(e) => {
					pageListViewModel.changeItemCount(e,
													  pageStates.setItemCount)
				}}/>
				<GamePageList.ListResults games={filteredGames}
										  {...pageStates}
										  viewModel={pageListViewModel}/>
			</GamePageList.Root>
		</article>)
}

