import { ComponentProps } from 'react'
import { Genre } from '@data/types'


export interface IGenreFilter extends ComponentProps<'menu'> {
	genres: Genre[]
}