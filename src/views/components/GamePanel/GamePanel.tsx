import { PanelBanner, PanelHeader } from '@views/components'
import style from './GamePanel.module.scss'
import { IGamePanel } from './IGamePanel'
import { StylingUtils } from '@src/utils'


function GamePanel({ game, images }: IGamePanel) {
	return (

		<article className={style.PanelBanner}
				 style={StylingUtils.getInlineBanner(game)}
		>
			<article className={style.GamePanel}>
				<PanelHeader game={game}/>
				<PanelBanner name={game.name} images={images}/>
			</article>
		</article>
	)
}

export { GamePanel }