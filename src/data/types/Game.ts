import {
	Developer,
	GameCommons,
	ImageCommons,
	Publisher,
	Screenshots
} from '@data/types'


export type Game = GameCommons & {
	nameOriginal: string
	description: string
	metacriticPlatforms: unknown[]
	backgroundImageAdditional: string
	website: string
	moviesCount: number
	creatorsCount: number
	achievementsCount: number
	parentAchievementsCount: number
	alternativeNames: string[]
	metacriticUrl: string
	parentsCount: number
	additionsCount: number
	gameSeriesCount: number
	developers: Developer[]
	publishers: Publisher[]
	descriptionRaw: string
	shortScreenshots?: ImageCommons[]
	screenshots?: Screenshots
}


