import { RootContext }                     from '@data/context'
import { Game, Genre, Recommended }        from '@data/types'
import { db }                              from '@src/main.tsx'
import { Gallery, GamePanel, Selection }   from '@views/components'
import { useContext, useEffect, useState } from 'react'
import style                               from './Home.module.scss'


export function Home() {
	const [recommended, setRecommended] = useState<Recommended>()

	const {
			  games,
			  genres,
			  apiMiddleware,
			  setGames,
			  setGenres
		  } = useContext(RootContext)

	useEffect(() => {
		apiMiddleware?.getAll('games', db)
					 .then(gameData => setGames(gameData as Game[]))
		apiMiddleware?.getAll('genres', db)
					 .then(genreData => setGenres(genreData as Genre[]))
	}, [])

	const recentPanel =
			  ((recommended?.recent)
			  && (recommended?.recentScreenshots))
			  && <GamePanel game={recommended?.recent}
                            screenshots={recommended?.recentScreenshots}
              />

	const dailyPanel =
			  ((recommended?.daily)
			  && (recommended?.dailyScreenshots))
			  && <GamePanel game={recommended?.daily}
                            screenshots={recommended?.dailyScreenshots}
              />

	const getInlineBanner = (game?: Game) =>
		({
			background: `linear-gradient(to bottom, 
										 rgba(0, 0, 0, 0.8), 
										 rgba(0, 0, 0, 0.8)) 100%,
						 				 url(${game?.backgroundImage}) 
						 				 no-repeat center / cover`
		})

	return (
		<main className={style.Home}>
			<h2>Welcome</h2>

			<article className={style.Banner}
					 style={getInlineBanner(recommended?.recent!)}
			>
				<h3>Popular</h3>
				{recentPanel}
			</article>

			{(games && genres) && <Selection games={games} genres={genres}/>}

			<article className={style.Banner}
					 style={getInlineBanner(recommended?.daily)}
			>
				<h3>Daily Suggestion</h3>
				{dailyPanel}
			</article>

			<article className={style.Gallery}>
				<h3>gallery</h3>

				{recommended?.recentScreenshots
				 && <Gallery screenshots={recommended?.recentScreenshots}/>}

				{recommended?.dailyScreenshots
				 && <Gallery screenshots={recommended?.dailyScreenshots}/>}
			</article>
		</main>
	)
}

