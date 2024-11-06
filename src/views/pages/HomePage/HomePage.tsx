import { RootContext } from '@data/context'
import { Recommended } from '@data/types'
import { Gallery, GamePanel, Selection } from '@views/components'
import { useContext, useState } from 'react'
import style from './HomePage.module.scss'
import { useHomePage } from '@src/hooks/useHomePage.ts'


export function HomePage() {
	const [recommended, setRecommended] = useState<Recommended>()
	const rootContext                   = useContext(RootContext)
	const { games, genres }             = rootContext

	useHomePage(rootContext, setRecommended)

	return (
		<main className={style.Home}>
			<h2>Get ready for the next level</h2>

			<RecentPanel recommended={recommended}/>

			{(games && genres) && <Selection games={games} genres={genres}/>}

			<DailyPanel recommended={recommended}/>

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
					  images={recommended?.recentScreenshots.results}
		/>
	)
}

function DailyPanel({ recommended }: IRecommendedPanel) {
	return (
		((recommended?.daily)
		&& (recommended?.dailyScreenshots))
		&& <GamePanel game={recommended?.daily}
					  images={recommended?.dailyScreenshots.results}
		/>
	)
}