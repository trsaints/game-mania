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
import { IParserUtils } from '@src/utils'
import { ITypeUtils } from '@utils/interfaces'


export class TypeUtils implements ITypeUtils {
	constructor(parserUtils: IParserUtils) {
		this._parserUtils = parserUtils
	}

	private readonly _parserUtils: IParserUtils

	mapToGame(data: never): Game {
		const mappedData = this._parserUtils.mapToCamelCase(data) as Game

		if (mappedData.platforms !== undefined) {
			mappedData.platforms
				= this.mapToGamesPlatforms(mappedData.platforms)
		}

		if (mappedData.developers) {
			mappedData.developers =
				mappedData.developers.map((d) => this._parserUtils.mapToCamelCase(
					d as never) as Developer)
		}

		if (mappedData.publishers) {
			mappedData.publishers =
				mappedData.publishers.map(p => this._parserUtils.mapToCamelCase(
					p as never) as Publisher)
		}

		if (mappedData.tags) {
			mappedData.tags =
				mappedData.tags.map(t => this._parserUtils.mapToCamelCase(t as never) as Tag)
		}

		if (mappedData.genres) {
			mappedData.genres =
				mappedData.genres.map(g => this._parserUtils.mapToCamelCase(g as never) as Genre)
		}

		if (mappedData.stores) {
			mappedData.stores = this.mapToStores(mappedData.stores)
		}

		return mappedData
	}

	mapToStores(stores: Store[]): Store[] {
		return stores.map(store => {
			store.store
				=
				this._parserUtils.mapToCamelCase(store.store as never) as typeof store.store

			return store
		})
	}

	mapToGamesPlatforms(platforms: GamesPlatform[]): GamesPlatform[] {
		return platforms.map(mainPlatform => {
			mainPlatform.platform =
				this._parserUtils.mapToCamelCase(mainPlatform.platform as never) as Platform

			return this._parserUtils.mapToCamelCase(mainPlatform as never) as GamesPlatform
		})
	}
}


