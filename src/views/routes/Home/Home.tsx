import { RootContext }                     from '@data/context'
import { Game, Genre, Recommended }        from '@data/types'
import { StylingUtils }                    from '@utils/StylingUtils.ts'
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
		apiMiddleware?.getAll('games', { search: 'de' })
					 .then(gameData => setGames(gameData as Game[]))
		apiMiddleware?.getAll('genres', {})
					 .then(genreData => setGenres(genreData as Genre[]))
		apiMiddleware?.getRecommendations()
					 .then(recommendedData => setRecommended(recommendedData))
	}, [])

	return (
		<main className={style.Home}>
			<h2>Welcome</h2>

			<article className={style.Banner}
					 style={StylingUtils.getInlineBanner(recommended?.recent!)}
			>
				<h3>Popular</h3>

				<RecentPanel recommended={recommended}/>
			</article>

			{(games && genres) && <Selection games={games} genres={genres}/>}

			<article className={style.Banner}
					 style={StylingUtils.getInlineBanner(recommended?.daily)}
			>
				<h3>Daily Suggestion</h3>
				<DailyPanel recommended={recommended}/>
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

interface IRecommendedPanel {
	recommended?: Recommended
}

function RecentPanel({ recommended }: IRecommendedPanel) {
	return (
		((recommended?.recent)
		&& (recommended?.recentScreenshots))
		&& <GamePanel game={recommended?.recent}
                      screenshots={recommended?.recentScreenshots}
        />
	)
}

function DailyPanel({ recommended }: IRecommendedPanel) {
	return (
		((recommended?.daily)
		&& (recommended?.dailyScreenshots))
		&& <GamePanel game={recommended?.daily}
                      screenshots={recommended?.dailyScreenshots}
        />
	)
}