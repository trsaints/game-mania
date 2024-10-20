import { Game, GamesPlatform, Store } from '@data/types'


export interface ITypeUtils {
	mapToGame(data: never): Game

	mapToStores(stores: Store[]): Store[]

	mapToGamesPlatforms(platforms: GamesPlatform[]): GamesPlatform[]
}