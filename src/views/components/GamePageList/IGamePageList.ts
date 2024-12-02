import { ComponentProps } from 'react'
import { Game } from '@data/types'


export interface IGamePageList extends ComponentProps<'article'> {
	games: Game[]
}