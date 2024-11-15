import { PanelBanner, PanelHeader } from '@views/components'
import style from './GamePanel.module.scss'
import { IGamePanel } from './IGamePanel'
import { StylingUtils } from '@src/utils'
import { ImageCommons } from '@data/types'


function GamePanel({ game }: IGamePanel) {
	const imagesToLoad = game.shortScreenshots
						 ?? game.screenshots?.results as ImageCommons[]
						 ?? []

	return (
		<article className={style.PanelBanner}
				 style={StylingUtils.getInlineBanner(game)}
		>
			<article className={style.GamePanel}>
				<PanelHeader game={game}/>
				<PanelBanner name={game.name} images={imagesToLoad}/>
			</article>
		</article>
	)
}

export { GamePanel }