import { GameContext } from '@data/context'
import { GameCard }    from '@views/components'
import { useContext }  from 'react'
import { Link }        from 'react-router-dom'
import style           from './Home.module.scss'


function Home() {
	const gameContext = useContext(GameContext)

	const gameList = gameContext.games
								.map(g =>
										 (<li key={g.id}>
											 <GameCard game={g}/>
										 </li>))

	return (
		<article className={style.Home}>
			<h2>Navigate by genre</h2>

			<menu className={style.Menu}>
				<li>
					<button className={style.Option}>action</button>
				</li>
				<li>
					<button className={style.Option}>adventure</button>
				</li>
				<li>
					<button className={style.Option}>platform</button>
				</li>
				<li>
					<button className={style.Option}>rpg</button>
				</li>
			</menu>

			<ul className={style.GameList}>
				{gameList}
				<li>
					<Link to="/search">see all</Link>
				</li>
			</ul>

		</article>
	)
}

export { Home }