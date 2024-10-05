import { GameData, Screenshots } from '@data/types'
import { ComponentProps }        from 'react'


export interface IGamePanel extends ComponentProps<'article'> {
	game: GameData
	screenshots: Screenshots
}