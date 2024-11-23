import style from '@views/components/GamePanel/GamePanel.module.scss'
import { IPanelHeader } from '@views/components/PanelHeader/IPanelHeader.ts'
import {
	GameTags
} from '@views/components/GameGenreTags/GameTags.tsx'


export function PanelHeader({ game }: IPanelHeader) {
	const shortDescriptionPattern = /^(([^.]+\.){1,4})/
	const shortDescription = game.descriptionRaw.match(shortDescriptionPattern)?.[0]

	return (
		<header className={style.Header}>
			<h3>{game.name}</h3>

			<dl className={style.MetaData}>
				<dd className={style.Meta}>
					<dt>release date:</dt>

					<time dateTime={game.released}>
						{new Date(game.released).getFullYear()}
					</time>
				</dd>


				<dd className={style.Meta}>
					<dt>game publisher:</dt>
					{game?.publishers[0]?.name ?? 'NA'}
				</dd>


				<dd className={style.Meta}>
					<dt>game studio:</dt>
					{game?.developers[0]?.name ?? 'NA'}
				</dd>
			</dl>

			<p className={style.Description}>{shortDescription}</p>

			<GameTags game={game}/>
		</header>
	)
}

