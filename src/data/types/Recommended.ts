import { Game, Screenshots } from '@data/types'


export type Recommended = {
	recent: Game
	daily: Game
	recentScreenshots: Screenshots
	dailyScreenshots: Screenshots
}
