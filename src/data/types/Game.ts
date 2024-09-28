import { Platforms } from '@data/types'


export type Game = {
	/* "id": 0,
	 "slug": "string",
	 "name": "string",
	 "released": "2024-09-28",
	 "tba": true,
	 "background_image": "http://example.com",
	 "rating": 0,
	 "rating_top": 0,
	 "ratings": { },
	 "ratings_count": 0,
	 "reviews_text_count": "string",
	 "added": 0,
	 "added_by_status": { },
	 "metacritic": 0,
	 "playtime": 0,
	 "suggestions_count": 0,
	 "updated": "2024-09-28T16:16:49Z",*/
	
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
	addedByStatus: any
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
}


