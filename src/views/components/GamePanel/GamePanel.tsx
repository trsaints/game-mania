import { PanelBanner, PanelHeader } from '@views/components'
import style from './GamePanel.module.scss'
import { IGamePanel } from './IGamePanel'
import { ImageCommons } from '@data/types'
import { GamePanelViewModel } from '@src/view-models/GamePanelViewModel.ts'


const viewModel = new GamePanelViewModel()

function GamePanel({ game }: IGamePanel) {
	const imagesToLoad = game.shortScreenshots
						 ?? game.screenshots?.results as ImageCommons[]
						 ?? []

	return (
		<article id="game-panel"
				 className={style.GamePanel}
				 style={viewModel.stylingUtils.getInlineBanner(0.7, game)}
		>
			<article className={style.Content}>
				<PanelHeader game={game} {...viewModel} />
				<PanelBanner name={game.name} images={imagesToLoad}/>
			</article>
		</article>
	)
}

export { GamePanel }