import { Game } from '@data/types'
import { Banner } from '@views/components'
import * as React from 'react'
import { PropsWithChildren } from 'react'
import style from './GamePanel.module.scss'
import { IGamePanel } from './IGamePanel'
import { StylingUtils } from '@src/utils'


function GamePanel({ game, images }: IGamePanel) {
	return (

		<article className={style.PanelBanner}
				 style={StylingUtils.getInlineBanner(game)}
		>
			<article className={style.GamePanel}>
				<Header game={game}/>
				<Banner name={game.name} images={images}/>
			</article>
		</article>
	)
}

interface IHeader extends PropsWithChildren {
	game: Game
}

function Header({ game }: IHeader) {
	const gameGenres = game.genres
						   .slice(0, 3)
						   .map(g =>
									<li className={style.GenreTag}
										key={`t-${g.id}`}
									>{g.name}</li>
						   )

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

			<ul className={style.Tags}>{gameGenres}</ul>
		</header>
	)
}

export { GamePanel }