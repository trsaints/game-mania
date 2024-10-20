import { Game, InlineBannerStyle } from '@data/types'
import { IStylingUtils } from '@utils/interfaces'


export const StylingUtils: IStylingUtils = {
	getInlineBanner
}

function getInlineBanner(game?: Game): InlineBannerStyle {
	return (
		{
			background: `linear-gradient(to bottom, 
										 rgba(0, 0, 0, 0.8), 
										 rgba(0, 0, 0, 0.8)) 100%,
						 				 url(${game?.backgroundImage}) 
						 				 no-repeat center / cover`
		}
	)
}