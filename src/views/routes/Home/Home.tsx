import { GameContext } from '@data/context'
import { GameCard }    from '@views/components'
import { useContext }  from 'react'
import style           from './Home.module.scss'


function Home() {
	const gameContext = useContext(GameContext)
	
	console.log(gameContext.games)

	const gameList = <ul>
		{
			gameContext.games.map(g => <li><GameCard game={g}/></li>)
		}
	</ul>

	return (
		<article className={style.Home}>
			<h2>Welcome</h2>

			{gameList}
		</article>
	)
}

export { Home }