import { Genre }                    from '@data/types'
import {
	ISelection
}                                   from '@views/components/Selection/ISelection.tsx'
import style                        from './Selection.module.scss'
import * as React                   from 'react'
import { ComponentProps, useState } from 'react'
import { GamePageList }             from '@views/components/GamePageList'


export function Selection({ games, genres }: ISelection) {
	const [selectedGenre, setSelectedGenre] = useState<string>('action')

	const filteredGames = games.filter(g =>
										   g.genres.findIndex(t => t.slug
																   === selectedGenre)
										   !== -1)

	const filterByGenre = (e: React.MouseEvent) => {

		const target = e.target as HTMLElement
		const listItem = target.closest('[data-slug]') as HTMLLIElement

		if (! listItem) {
			return
		}

		setSelectedGenre(listItem.dataset['slug'] ?? '')
	}

	return (
		<article className={style.Selection} onClick={filterByGenre}>
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