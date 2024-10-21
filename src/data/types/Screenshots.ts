import { Image } from '@data/types'


export type Screenshots = {
	count: number
	next?: string
	previous?: string
	results: Image[]
}

