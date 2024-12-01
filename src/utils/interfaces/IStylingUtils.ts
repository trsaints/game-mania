import { Game, InlineBannerStyle } from '@data/types'
import { InlineScoreStyles } from '@data/types/InlineScoreStyles.ts'


export interface IStylingUtils {
	getInlineBanner(visibility: number, game?: Game): InlineBannerStyle

	getInlineScoreStyles(game: Game): InlineScoreStyles
}