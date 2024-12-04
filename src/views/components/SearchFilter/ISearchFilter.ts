import { Genre, Platform, Publisher, Tag } from '@data/types'
import { ComponentProps } from 'react'
import { FilterStates } from '@data/types/FilterStates.ts'


export interface ISearchFilter extends ComponentProps<'form'> {
	publishers: Publisher[]
	platforms: Platform[]
	genres: Genre[]
	tags: Tag[]
	filterStates: FilterStates
}