import { PropsWithChildren } from 'react'
import { Game } from '@data/types'


export interface IPanelHeader extends PropsWithChildren {
	game: Game
}