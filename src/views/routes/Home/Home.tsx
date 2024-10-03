import { GameContext }                     from '@data/context'
import { Game }                            from '@data/types'
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
			  && <GamePanel game={recommended?.recent}
                            screenshots={recommended?.recentScreenshots}
              />

	const dailyPanel =
			  (recommended?.daily && recommended?.dailyScreenshots)
			  && <GamePanel game={recommended?.daily}
                            screenshots={recommended?.dailyScreenshots}
              />

	const getInlineBanner = (game?: Game) => {
		return {
			background: `linear-gradient(
						 to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) 100%,
						 url(${game?.backgroundImage}) no-repeat center / cover`
		}
	}

	return (
		<article className={style.Home}>
			<h2>Welcome</h2>

			<article className={style.Banner}
					 style={getInlineBanner(recommended?.recent!)}
			>
				<h3>Popular</h3>
				{recentPanel}
			</article>

			<article className={style.Selection}>
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

			<article className={style.Banner}
					 style={getInlineBanner(recommended?.daily)}
			>
				<h3>Daily Suggestion</h3>
				{dailyPanel}
			</article>
		</article>
	)
}

export { Home }