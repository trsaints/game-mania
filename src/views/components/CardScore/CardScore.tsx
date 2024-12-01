import { StylingUtils } from '@src/utils'
import style from '@views/components/GameCard/GameCard.module.scss'
import { Game } from '@data/types'


interface ICardScore {
	game: Game
}

export function CardScore({ game }: ICardScore) {
	const highlightColor = new StylingUtils().getScoreHighlightColor(game)

	return (
		<p className={style.MetaCritic} style={{ color: highlightColor }}>
			rating: {game.metacritic ?? '?'}/100
		</p>
	)
}