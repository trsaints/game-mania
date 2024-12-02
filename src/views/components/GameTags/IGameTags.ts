import { Game } from '@data/types'


export interface IGameTags {
	game: Game,
	count?: number
	baseAlignment?: 'flex-start' | 'center' | 'flex-end'
}