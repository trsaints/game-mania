import { Developer, GameCommons, Publisher } from '@data/types'


export type GameDetails = GameCommons & {
	nameOriginal: string
	description: string
	metacriticPlatforms: unknown[]
	backgroundImageAdditional: string
	website: string
	screenshotsCount: number
	moviesCount: number
	creatorsCount: number
	achievementsCount: number
	parentAchievementsCount: number
	redditUrl: string
	redditName: string
	redditDescription: string
	redditLogo: string
	redditCount: number
	twitchCount: number
	youtubeCount: number
	alternativeNames: string[]
	metacriticUrl: string
	parentsCount: number
	additionsCount: number
	gameSeriesCount: number
	developers: Developer[]
	publishers: Publisher[]
	descriptionRaw: string
}


