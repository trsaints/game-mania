import {
	Developer,
	Game,
	GamesPlatform,
	Genre,
	Platform,
	Publisher,
	Store,
	Tag
} from '@data/types'
import { IParserUtils, ITypeUtils } from '@utils/interfaces'


export class TypeUtils implements ITypeUtils {
	mapToGame(data: never, parserUtils: IParserUtils): Game {
		const mappedData = parserUtils.mapToCamelCase(data) as Game

		if (mappedData.platforms !== undefined) {
			mappedData.platforms
				= this.mapToGamesPlatforms(mappedData.platforms, parserUtils)
		}

		if (mappedData.developers) {
			mappedData.developers =
				mappedData.developers.map((d) => parserUtils.mapToCamelCase(
					d as never) as Developer)
		}

		if (mappedData.publishers) {
			mappedData.publishers =
				mappedData.publishers.map(p => parserUtils.mapToCamelCase(
					p as never) as Publisher)
		}

		if (mappedData.tags) {
			mappedData.tags =
				mappedData.tags.map(t => parserUtils.mapToCamelCase(t as never) as Tag)
		}

		if (mappedData.genres) {
			mappedData.genres =
				mappedData.genres.map(g => parserUtils.mapToCamelCase(g as never) as Genre)
		}

		if (mappedData.stores) {
			mappedData.stores = this.mapToStores(mappedData.stores, parserUtils)
		}

		return mappedData
	}

	private mapToStores(stores: Store[], parserUtils: IParserUtils): Store[] {
		return stores.map(store => {
			store.store
				=
				parserUtils.mapToCamelCase(store.store as never) as typeof store.store

			return store
		})
	}

	private mapToGamesPlatforms(platforms: GamesPlatform[],
						parserUtils: IParserUtils
	): GamesPlatform[] {
		return platforms.map(mainPlatform => {
			mainPlatform.platform =
				parserUtils.mapToCamelCase(mainPlatform.platform as never) as Platform

			return parserUtils.mapToCamelCase(mainPlatform as never) as GamesPlatform
		})
	}
}


