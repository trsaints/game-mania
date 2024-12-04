import { Dispatch, SetStateAction } from 'react'
import { Genre } from '@data/types/Genre.ts'
import { Tag } from '@data/types/Tag.ts'
import { Publisher } from '@data/types/Publisher.ts'
import { InlineBannerStyle } from '@data/types/InlineBannerStyle.ts'


export type SearchStates = {
	setGenres: Dispatch<SetStateAction<Genre[]>>
	setTags: Dispatch<SetStateAction<Tag[]>>
	setPublishers: Dispatch<SetStateAction<Publisher[]>>
	setCurrentBanner: Dispatch<SetStateAction<InlineBannerStyle>>
}