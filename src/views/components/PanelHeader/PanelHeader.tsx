import style from '@views/components/GamePanel/GamePanel.module.scss'
import { IPanelHeader } from '@views/components/PanelHeader/IPanelHeader.ts'
import {
	GameGenreTags
} from '@views/components/GameGenreTags/GameGenreTags.tsx'


export function PanelHeader({ game }: IPanelHeader) {
	return (
		<header className={style.Header}>
			<h3>{game.name}</h3>

			<p className={style.Released}>Released at:
				<time dateTime={game.released}>
					{' ' + new Date(game.released).getFullYear()}
				</time>
			</p>

			<p className={style.Publisher}>Publisher: {game?.publishers[0]?.name
													   ?? 'NA'}</p>

			<p className={style.Description}>{game.descriptionRaw}</p>

			<GameGenreTags game={game}/>
		</header>
	)
}

