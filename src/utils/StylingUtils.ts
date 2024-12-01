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

	getInlineScoreStyles(game: Game): InlineScoreStyles {
		const metaCriticHighlightColor = this.getScoreHighlightColor(game)

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

	getScoreHighlightColor(game: Game): string {
		if (game.metacritic >= 90) {
			return '#52C539'
		}

		if (game.metacritic >= 70) {
			return '#EAC324'
		}

		return '#EA2424'
	}
}

