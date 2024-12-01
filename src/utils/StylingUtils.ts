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
}

