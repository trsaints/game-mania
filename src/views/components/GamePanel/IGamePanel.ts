import { Game, Screenshots } from '@data/types'
import { ComponentProps }    from 'react'


export interface IGamePanel extends ComponentProps<'article'> {
	game: Game
	screenshots: Screenshots
}