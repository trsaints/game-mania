import { ISelection } from './ISelection'
import style from './Selection.module.scss'
import { useState } from 'react'
import { GamePageList } from '@views/components'
import { SelectionViewModel } from '@src/view-models/SelectionViewModel.ts'
import { GenreFilter } from '@views/components/GenreFilter/GenreFilter.tsx'
import { usePageList } from '@src/hooks/usePageList.ts'


const viewModel = new SelectionViewModel()

export function Selection({ games, genres }: ISelection) {
	const [selectedGenre, setSelectedGenre] = useState<string>('action')
	const pageStates                        = usePageList()

	const filteredGames = viewModel.filterByGenre(games, selectedGenre)

	return (
		<article className={style.Selection}
				 onClick={(e) => viewModel.displayByGenre(e, setSelectedGenre)}>
			<h3 className={style.MainHeader}>Navigate by genre</h3>

			<GenreFilter genres={genres}/>
			<GamePageList.Root games={filteredGames}></GamePageList.Root>
		</article>)
}

