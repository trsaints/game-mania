import { Image } from '@data/types/Image.ts'


export type Screenshots = {
	count: number
	next?: string
	previous?: string
	results: Image[]
}

