import { GameData }       from '@data/types'
import { ComponentProps } from 'react'


export interface IGameCard extends ComponentProps<'article'> {
	game: GameData
}