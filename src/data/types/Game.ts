import { Platforms } from '@data/types'


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
	reviewsTextCount: string
	added: number
	addedByStatus: unknown
	metacritic: number
	playtime: number
	suggestionsCount: 0
	updated: string
	esrbRating: {
		id: number
		slug: "everyone"
		name: "Everyone"
	}
	platforms: Platforms
	genres: Genre[] 
}

type Genre = {
	id: number
	name: string
	slug: string
	imageBackground: string
}


