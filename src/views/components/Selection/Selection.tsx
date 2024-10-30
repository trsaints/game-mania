import { Genre } from '@data/types'
import { ISelection } from './ISelection'
import style from './Selection.module.scss'
import { ComponentProps, useState } from 'react'
import { GamePageList } from '@views/components'
import { SelectionViewModel } from '@src/view-models/SelectionViewModel.ts'


const viewModel = new SelectionViewModel()

export function Selection({ games, genres }: ISelection) {
	const [selectedGenre, setSelectedGenre] = useState<string>('action')

	const filteredGames = games.filter(g => {
		return g.genres.findIndex(t => t.slug
									   === selectedGenre)
			   !== -1
	})

	return (
		<article className={style.Selection}
				 onClick={(e) => viewModel.filterByGenre(e, setSelectedGenre)}>
			<h3 className={style.MainHeader}>Navigate by genre</h3>

			<GenreFilter genres={genres}/>
			<GamePageList games={filteredGames}/>
		</article>)
}

interface IGenreFilter extends ComponentProps<'menu'> {
	genres: Genre[]
}

function GenreFilter({ genres }: IGenreFilter) {
	const genreList = genres.map(g => {
		const key = `selection-${typeof (g)}-${g.id}`

		return (
			<li key={key} data-slug={g.slug}>
				<button className={style.Option}>{g.name}</button>
			</li>
		)
	})

	return (
		<menu className={style.Menu}>
			{genreList}
		</menu>
	)
}