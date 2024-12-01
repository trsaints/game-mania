import { PropsWithChildren } from 'react'
import { Game } from '@data/types'
import { IStylingUtils } from '@src/utils'


export interface IPanelHeader extends PropsWithChildren {
	game: Game
	stylingUtils: IStylingUtils
}