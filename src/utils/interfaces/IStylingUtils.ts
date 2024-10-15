import { Game }              from '@data/types'
import { InlineBannerStyle } from '@data/types/InlineBannerStyle.ts'

export interface IStylingUtils {
	getInlineBanner(game?: Game): InlineBannerStyle
}