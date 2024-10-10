export type DataRequestParams = {
	page?: number
	pageSize?: number
	search?: string
	searchPrecise?: boolean
	searchExact?: boolean
	parentPlatforms?: string
	platforms?: string
	stores?: string
	developers?: string
	publishers?: string
	genres?: string
	tags?: string
	creators?: string
	dates?: string
	updated?: string
	platformsCount?: number
	metacritic?: string
	excludeCollection?: number
	excludeAdditions?: boolean
	excludeParents?: boolean
	excludeGameSeries?: boolean
	excludeStores?: string
	ordering?: 'name' | 'released' | 'added' | 'created' | 'updated' | 'rating' | 'metacritic'
}