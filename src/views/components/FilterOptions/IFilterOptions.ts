import { Genre, Platform, Publisher, Tag } from '@data/types'


export interface IFilterOptions {
	options: Publisher[] | Genre[] | Tag[] | Platform[]
	typeName: string
}