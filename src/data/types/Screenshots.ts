import { Image, ImageCommons } from '@data/types'


export type Screenshots = ImageCommons & {
	count: number
	next?: string
	previous?: string
	results: Image[]
}

