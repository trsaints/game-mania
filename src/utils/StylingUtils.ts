import { Game, InlineBannerStyle } from '@data/types'
import { IStylingUtils } from '@utils/interfaces'


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

	getMetaCriticHighlightColor(game: Game): string {
		if (game.metacritic >= 90) {
			return '#52C539'
		} else if (game.metacritic >= 70) {
			return '#EAC324'
		} else {
			return '#EA2424'
		}
	}
}

