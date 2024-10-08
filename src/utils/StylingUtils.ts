import { Game } from '@data/types'

export const StylingUtils = {
	getInlineBanner
}

function getInlineBanner(game?: Game) {
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