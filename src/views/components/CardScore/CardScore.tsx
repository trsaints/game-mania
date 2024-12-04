import { StylingUtils } from '@src/utils'
import style from '@views/components/GameCard/GameCard.module.scss'
import { Game } from '@data/types'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
	faCircleCheck, faCircleExclamation, faCircleXmark, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface ICardScore {
	game: Game
}

export function CardScore({ game }: ICardScore) {
	const highlightColor = new StylingUtils().getScoreHighlightColor(game)
	let selectedIcon: IconDefinition

	if (!game.metacritic) {
		selectedIcon = faQuestionCircle
	} else if (game.metacritic >= 81) {
		selectedIcon = faCircleCheck
	} else if (game.metacritic >= 51) {
		selectedIcon = faCircleExclamation
	} else {
		selectedIcon = faCircleXmark
	}

	return (
		<p className={style.MetaCritic} style={{ color: highlightColor }}>
			rating: {game.metacritic ?? '?'}/100
			<FontAwesomeIcon icon={selectedIcon} className="icon--right"/>
		</p>
	)
}