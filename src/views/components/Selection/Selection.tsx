import { GameCard } from '@views/components'
import { ISelection } from '@views/components/Selection/ISelection.tsx'
import style        from '@views/routes/Home/Home.module.scss'
import { Link }     from 'react-router-dom'


export function Selection({ games, genres }: ISelection) {
	const gameList = games.map(g =>
								   (<li key={g.id}>
									   <GameCard game={g}/>
								   </li>))

	const genreList = genres.map(g => {
		const key = `selection-${typeof (g)}-${g.id}`

		return (
			<li key={key}>
				<button className={style.Option}>{g.name}</button>
			</li>
		)
	})

	return (
		<article className={style.Selection}>
			<h3>Navigate by genre</h3>

			<menu className={style.Menu}>
				{genreList}
			</menu>

			<ul className={style.GameList}>
				{gameList}
				<li>
					<Link to="/search">see all</Link>
				</li>
			</ul>
		</article>)
}