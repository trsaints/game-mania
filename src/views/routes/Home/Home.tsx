import { GameContext } from '@data/context'
import { GameCard }    from '@views/components'
import { useContext }  from 'react'
import style           from './Home.module.scss'


function Home() {
	const gameContext = useContext(GameContext)
	
	const gameList = gameContext.games
								.map(g => <li key={g.id}><GameCard game={g}/></li>)
	
	return (
		<article className={style.Home}>
			<h2>Welcome</h2>

			<ul>{gameList}</ul>
		</article>
	)
}

export { Home }