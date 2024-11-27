import { RootContext } from '@data/context'
import { ImageCommons, Recommended } from '@data/types'
import { GamePanel, PanelBanner, Selection } from '@views/components'
import { useContext, useState } from 'react'
import style from './HomePage.module.scss'
import { useHomePage } from '@src/hooks/useHomePage.ts'


export function HomePage() {
	const [recommended, setRecommended] = useState<Recommended>()
	const rootContext                   = useContext(RootContext)
	const { games, genres }             = rootContext

	useHomePage(rootContext, setRecommended)

	const recentImages = recommended?.recent.shortScreenshots
						 || recommended?.recent.screenshots?.results as ImageCommons[]
						 || []

	const dailyImages = recommended?.daily.shortScreenshots
						|| recommended?.daily.screenshots?.results as ImageCommons[]
						|| []

	return (
		<main className={style.Home}>
			<h2>Get ready for the next level</h2>

			<RecentPanel recommended={recommended}/>

			{(games && genres) && <Selection games={games} genres={genres}/>}

			<DailyPanel recommended={recommended}/>

			<article className={style.Gallery}>
				<h3>gallery</h3>

				{(recommended?.recent.screenshots)
				 && <PanelBanner name={recommended.recent.name}
								 images={recentImages}/>}

				{(recommended?.daily.screenshots)
				 && <PanelBanner name={recommended.daily.name}
								 images={dailyImages}/>}
			</article>
		</main>
	)
}

interface IRecommendedPanel {
	recommended?: Recommended
}

function RecentPanel({ recommended }: IRecommendedPanel) {
	return ((recommended?.recent) && <GamePanel game={recommended?.recent}/>)
}

function DailyPanel({ recommended }: IRecommendedPanel) {
	return ((recommended?.daily) && <GamePanel game={recommended?.daily}/>)
}