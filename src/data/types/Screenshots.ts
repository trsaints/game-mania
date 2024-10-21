import { Image } from '@data/types'


export type Screenshots = {
	id: number
	count: number
	next?: string
	previous?: string
	results: Image[]
}

