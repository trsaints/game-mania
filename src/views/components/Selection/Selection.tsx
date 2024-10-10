import { Game, Genre }              from '@data/types'
import { GameCard }                 from '@views/components'
import {
	ISelection
}                                   from '@views/components/Selection/ISelection.tsx'
import style                        from '@views/routes/Home/Home.module.scss'
import * as React                   from 'react'
import { ComponentProps, useState } from 'react'
import { Link }                     from 'react-router-dom'


export function Selection({ games, genres }: ISelection) {
	const [selectedGenre, setSelectedGenre] = useState<string>('action')

	const filteredGames = games.filter(g =>
										   g.genres.findIndex(t => t.slug
																   === selectedGenre)
										   !== -1)
	
	const filterByGenre = (e: React.MouseEvent) => {

		const target   = e.target as HTMLElement
		const listItem = target.closest('[data-slug]') as HTMLLIElement
		
		if (!listItem) return 
		
		setSelectedGenre(listItem.dataset['slug'] ?? '')
	}

	return (
		<article className={style.Selection} onClick={filterByGenre}>
			<h3>Navigate by genre</h3>

			<GenreFilter genres={genres}/>
			<GameList games={filteredGames}/>
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

interface IGameList {
	games: Game[]
}

function GameList({ games }: IGameList) {
	const gameList = games.map(g =>
								   (<li key={g.id}>
									   <GameCard game={g}/>
								   </li>))

	return (
		<ul className={style.GameList}>
			{gameList}
			<li>
				<Link to="/search">see all</Link>
			</li>
		</ul>
	)
}