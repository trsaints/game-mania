import { ComponentProps } from 'react'
import { Game }           from '../../../data/types/Game.ts'


export interface IGamePage extends ComponentProps<'article'> {
	game: Game
}