import {
	Game,
	GamesPlatform,
	Recommended,
	Screenshots,
	Store
}                       from '@data/types'
import { IDataService } from '@services/interfaces'


export interface IGameService extends IDataService<Game> {
	getRecommendations(): Promise<Recommended>

	mapToGame(data: any): Game

	mapToStores(stores: Store[]): Store[]

	mapToGamesPlatforms(platforms: GamesPlatform[]): GamesPlatform[]

	getScreenshots(id: number): Promise<Screenshots>
}