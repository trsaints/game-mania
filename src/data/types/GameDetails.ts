export type GameDetails = {
	nameOriginal: string
	description: string
	metacriticPlatforms: [
		{
			metascore: number
			url: string
		}
	]
	backgroundImageAdditional: string
	website: string
	ratings: {}
	reactions: {}
	screenshotsCount: number
	moviesCount: number
	creatorsCount: number
	achievementsCount: number
	parentAchievementsCount: string
	redditUrl: string
	redditName: string
	redditDescription: string
	redditLogo: string
	redditCount: number
	twitchCount: string
	youtubeCount: string
	alternativeNames: string[]
	metacriticUrl: string
	parentsCount: number
	additionsCount: number
	gameSeriesCount: number

}