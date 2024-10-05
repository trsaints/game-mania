import { GenreData, PlatformData, PublisherData, TagData } from '@data/types'
import { ComponentProps }                                  from 'react'


export interface ISearchFilter extends ComponentProps<'form'> {
	publishers: PublisherData[]
	platforms: PlatformData[]
	genres: GenreData[]
	tags: TagData[]
}