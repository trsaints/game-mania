import { GameContext }                     from '@data/context'
import { Recommended }                     from '@data/types/Recommended.ts'
import {
	GameService
}                                          from '@services/GameService/GameService.ts'
import { GameCard }                        from '@views/components'
import { GamePanel }                       from '@views/components/GamePanel'
import { useContext, useEffect, useState } from 'react'
import { Link }                            from 'react-router-dom'
import style                               from './Home.module.scss'


function Home() {
	const [recommended, setRecommended] = useState<Recommended>()

	useEffect(() => {
		GameService.getRecommendations().then(r => {
			setRecommended(r)
		})
	}, [])

	const gameContext = useContext(GameContext)
	const gameList    = gameContext.games
								   .map(g =>
											(<li key={g.id}>
												<GameCard game={g}/>
											</li>))
	
	const recentPanel =
			  (recommended?.recent && recommended?.recentScreenshots)
			  && <GamePanel game={recommended?.recent} screenshots={recommended?.recentScreenshots}/>

	const dailyPanel =
			  (recommended?.daily && recommended?.dailyScreenshots)
			  && <GamePanel game={recommended?.daily} screenshots={recommended?.dailyScreenshots}/>

	return (
		<article className={style.Home}>
			<h2>Welcome</h2>

			{recentPanel}

			<article>
				<h3>Navigate by genre</h3>

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

			<h2>Daily Suggestion</h2>

			{dailyPanel}
		</article>
	)
}

export { Home }