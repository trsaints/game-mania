import { IPanelHeader } from '@views/components/PanelHeader/IPanelHeader.ts'
import { GameTags } from '@views/components/GameTags/GameTags.tsx'
import style from './PanelHeader.module.scss'


export function PanelHeader({ game }: IPanelHeader) {
	const shortDescriptionPattern = /^(([^.]+\.){1,4})/
	const shortDescription        = game.descriptionRaw.match(
		shortDescriptionPattern)?.[0]

	return (
		<header className={style.PanelHeader}>
			<h3>{game.name}</h3>

			<dl className={style.MetaData}>
				<dt>release date:</dt>
				<dd className={style.Meta}>
					<time dateTime={game.released}>
						{new Date(game.released).getFullYear()}
					</time>
				</dd>
			</dl>

			<dl className={style.MetaData}>
				<dt>game publisher:</dt>
				<dd className={style.Meta}>
					{game?.publishers[0]?.name ?? 'NA'}
				</dd>
			</dl>

			<dl className={style.MetaData}>
				<dt>game studio:</dt>
				<dd className={style.Meta}>
					{game?.developers[0]?.name ?? 'NA'}
				</dd>
			</dl>

			<p className={style.Description}>{shortDescription}</p>

			<GameTags game={game}/>
		</header>
	)
}

