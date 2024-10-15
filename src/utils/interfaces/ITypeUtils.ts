import { Game, GamesPlatform, Store } from '@data/types'

export interface ITypeUtils {
	mapToGame(data: any): Game
	mapToStores(stores: Store[]): Store[]
	mapToGamesPlatforms(platforms: GamesPlatform[]): GamesPlatform[]
}