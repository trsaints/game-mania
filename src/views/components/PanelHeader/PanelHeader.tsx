import { IPanelHeader } from '@views/components/PanelHeader/IPanelHeader.ts'
import { GameTags } from '@views/components/GameTags/GameTags.tsx'
import style from './PanelHeader.module.scss'
import { Game } from '@data/types'


function getMetaCriticHighlightColor(game: Game): string {
	if (game.metacritic >= 90) {
		return '#52C539'
	} else if (game.metacritic >= 70) {
		return '#EAC324'
	} else {
		return '#EA2424'
	}
}

export function PanelHeader({ game }: IPanelHeader) {
	const shortDescriptionPattern = /^(([^.]+\.){1,4})/
	const shortDescription        = game.descriptionRaw.match(
		shortDescriptionPattern)?.[0]

	const metacriticHighlightColor = getMetaCriticHighlightColor(game)

	const metatriticStyles = {
		borderColor: metacriticHighlightColor,
		color      : metacriticHighlightColor
	}

	return (
		<header className={style.PanelHeader}>
			<h3>{game.name}</h3>

			<p className={style.MetaCritic}>
				meta critic:

				<span style={metatriticStyles}>{game.metacritic}</span>
			</p>

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
					{game.publishers && (game.publishers[0]?.name ?? 'NA')}
				</dd>
			</dl>

			<dl className={style.MetaData}>
				<dt>game studio:</dt>
				<dd className={style.Meta}>
					{game?.developers[0]?.name ?? 'NA'}
				</dd>
			</dl>

			<p className={style.Description}>{shortDescription}</p>

			<GameTags game={game} count={3} baseAlignment="center"/>
		</header>
	)
}

