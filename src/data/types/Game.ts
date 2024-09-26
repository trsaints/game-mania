export type Game = {
	name: string
	genres: number[]
	category: GameCategory
	firstReleaseDate: number
	involvedCompanies: number[]
	platforms: number[]
	status: GameStatus
	totalRating: number
	similarGames: number[]
	summary: string
}

export enum GameCategory {
	mainGame,
	dlcAddon,
	expansion,
	bundle,
	standaloneExpansion,
	mod,
	episode,
	season,
	remake,
	remaster,
	expandedGame,
	port,
	fork,
	update,
	pack,
}

export enum GameStatus {
	released,
	alpha,
	beta,
	early_access,
	offline,
	cancelled,
	rumored,
	delisted,
}