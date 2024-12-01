import { Game, InlineBannerStyle } from '@data/types'
import { IStylingUtils } from '@utils/interfaces'
import { InlineScoreStyles } from '@data/types/InlineScoreStyles.ts'


export class StylingUtils implements IStylingUtils {
	getInlineBanner(visibility: number, game?: Game): InlineBannerStyle {
		return (
			{
				background: `linear-gradient(to bottom, 
										 rgba(0, 0, 0, ${visibility}), 
										 rgba(0, 0, 0, ${visibility})) 100%,
						 				 url(${game?.backgroundImage}) 
						 				 no-repeat center / cover`
			}
		)
	}

	getMetaCriticHighlightColor(game: Game): InlineScoreStyles {
		let metaCriticHighlightColor: string

		if (game.metacritic >= 90) {
			metaCriticHighlightColor = '#52C539'
		} else if (game.metacritic >= 70) {
			metaCriticHighlightColor = '#EAC324'
		} else {
			metaCriticHighlightColor = '#EA2424'
		}

		return {
			borderColor    : metaCriticHighlightColor,
			color          : metaCriticHighlightColor,
			display        : 'inline-block',
			width          : '2.75em',
			height         : '2.75em',
			borderRadius   : '100%',
			backgroundColor: '#030303ff',
			border         : '2px solid',
			textAlign      : 'center',
			paddingInline  : '0.5rem',
			paddingBlock   : '0.75rem'
		}
	}
}

