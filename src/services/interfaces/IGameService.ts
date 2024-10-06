import { Game, GamesPlatform, Recommended, Screenshots } from '@data/types'
import {
	IDataService
}                                                        from '@services/interfaces'


export interface IGameService extends IDataService<Game> {
	getRecommendations(): Promise<Recommended>

	mapToGame(data: any): Game

	mapToPlatforms(platforms: GamesPlatform[]): GamesPlatform[]

	getScreenshots(id: number): Promise<Screenshots>
}