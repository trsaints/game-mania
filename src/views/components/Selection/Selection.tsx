import { Game, Genre } from '@data/types'
import { GameCard }    from '@views/components'
import { ISelection }  from '@views/components/Selection/ISelection.tsx'
import style           from '@views/routes/Home/Home.module.scss'
import { Link }        from 'react-router-dom'


export function Selection({ games, genres }: ISelection) {

	return (
		<article className={style.Selection}>
			<h3>Navigate by genre</h3>

			<GenreFilter genres={genres}/>
			<GameList games={games}/>
		</article>)
}

interface IGenreFilter {
	genres: Genre[]
}

function GenreFilter({ genres }: IGenreFilter) {
	const genreList = genres.map(g => {
		const key = `selection-${typeof (g)}-${g.id}`

		return (
			<li key={key}>
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