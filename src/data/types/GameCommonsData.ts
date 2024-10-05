import {
	AddedByStatus,
	EsrbRating,
	GamesPlatform,
	GenreData,
	ParentPlatform,
	Rating,
	Store,
	TagData
} from '@data/types'


export type GameCommonsData = {
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
	platforms: GamesPlatform[]
	stores: Store[]
	genres: GenreData[]
	tags: TagData[]
	esrbRating: EsrbRating
	clip: unknown
}
