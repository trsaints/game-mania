import { GameContext }                      from '@data/context'
import { GameData, GenreData, Recommended } from '@data/types'
import { GameService, GenreService }        from '@src/services'
import { Gallery, GameCard, GamePanel }    from '@views/components'
import { useContext, useEffect, useState } from 'react'
import { Link }                            from 'react-router-dom'
import style                               from './Home.module.scss'


export function Home() {
	const [recommended, setRecommended] = useState<Recommended>()
	const [genres, setGenres]           = useState<GenreData[]>()

	useEffect(() => {
		GameService.getRecommendations().then(r => setRecommended(r))
		GenreService.getGenres({}).then(g => setGenres(g))
	}, [])

	const gameContext = useContext(GameContext)

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

	const getInlineBanner = (game?: GameData) => {
		return {
			background: `linear-gradient(to bottom, 
										 rgba(0, 0, 0, 0.8), 
										 rgba(0, 0, 0, 0.8)) 100%,
						 				 url(${game?.backgroundImage}) 
						 				 no-repeat center / cover`
		}
	}

	return (
		<main className={style.Home}>
			<h2>Welcome</h2>

			<article className={style.Banner}
					 style={getInlineBanner(recommended?.recent!)}
			>
				<h3>Popular</h3>
				{recentPanel}
			</article>

			<Selection games={gameContext.games} genres={genres ?? []}/>

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

interface ISelection {
	games: GameData[]
	genres: GenreData[]
}

function Selection({ games, genres }: ISelection) {
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

