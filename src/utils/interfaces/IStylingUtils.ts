import { Game, InlineBannerStyle } from '@data/types'

export interface IStylingUtils {
	getInlineBanner(game?: Game): InlineBannerStyle
}