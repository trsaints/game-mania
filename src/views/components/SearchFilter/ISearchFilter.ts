import { Genre, Platform, Publisher, Tag } from '@data/types'
import { ComponentProps } from 'react'


export interface ISearchFilter extends ComponentProps<'form'> {
	publishers: Publisher[]
	platforms: Platform[]
	genres: Genre[]
	tags: Tag[]
}