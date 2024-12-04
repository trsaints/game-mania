import { Genre, Publisher, Tag } from '@data/types'


export interface ISearchMenu {
	genres: Genre[]
	tags: Tag[]
	publishers: Publisher[]
}