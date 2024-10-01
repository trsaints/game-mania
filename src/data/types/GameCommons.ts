import {
	AddedByStatus,
	EsrbRating,
	Genre,
	ParentPlatform,
	Platform,
	Rating,
	Store,
	Tag
} from '@data/types'


export type GameCommons = {
	rating: number
	ratingTop: number
	ratings: Rating[]
	added: number
	addedByStatus: AddedByStatus
	playtime: number
	released: string
	tba: boolean
	updated: string
	backgroundImage: string
	id: number
	slug: string
	name: string
	metacritic: unknown
	reviewsTextCount: number
	ratingsCount: number
	suggestionsCount: number
	userGame: unknown
	reviewsCount: number
	saturatedColor: string
	dominantColor: string
	parentPlatforms: ParentPlatform[]
	platforms: Platform[]
	stores: Store[]
	genres: Genre[]
	tags: Tag[]
	esrbRating: EsrbRating
	clip: unknown
}
