import { Game, InlineBannerStyle } from '@data/types'


export interface IStylingUtils {
	getInlineBanner(visibility: number, game?: Game): InlineBannerStyle

	getMetaCriticHighlightColor(game: Game): string
}