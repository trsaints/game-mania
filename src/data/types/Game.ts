import { Platform, Platforms } from '@data/types'

export type GameProperties = keyof Game

export type Game = {
	id: number
	slug: string
	name: string
	released: string
	tba: boolean
	backgroundImage: string
	rating: number
	ratingTop: number
	ratingsCount: number
	reviewsCount: number
	reviewsTextCount: number
	added: number
	addedByStatus: unknown
	metacritic: number
	playtime: number
	suggestionsCount: 0
	updated: string
	esrbRating: {
		id: number
		slug: 'everyone'
		name: 'Everyone'
	}
	parentPlatforms: ParentPlatforms
	platforms: Platforms
	genres: Genre[]
	dominantColor: string
	shortsScreenshots: Image[]
	stores: Store[]
	tags: Tag[]
}

type Tag = {
	games_count: number
	id: number
	image_background: string
	language: string
	name: string
	slug: string
}
 
type Store = {
	domain: string
	games_count: number
	id: number
	image_background: string
	name: string
	slug: string
}

type Image = {
	id: number
	image: string
}

type ParentPlatforms = {
	platforms: Platform[]
}

type Genre = {
	id: number
	name: string
	slug: string
	imageBackground: string
}


