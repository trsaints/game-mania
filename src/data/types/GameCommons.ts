import { EsrbRating } from '@data/types/EsrbRating.ts'
import { Platforms }  from '@data/types/Platforms.ts'


export type GameCommons = {
	id: number
	slug: string
	name: string
	metacritic: number
	released: string
	tba: boolean
	updated: string
	backgroundImage: string
	rating: number
	ratingTop: number
	added: number
	addedByStatus: {}
	playtime: number
	reviewsTextCount: string
	ratingsCount: number
	suggestionsCount: number
	esrbRating: EsrbRating
	platforms: Platforms
}