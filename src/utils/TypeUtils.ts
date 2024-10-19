import {
	Developer,
	Game,
	GamesPlatform,
	Genre,
	Platform,
	Publisher,
	Store,
	Tag
}                      from '@data/types'
import { ParserUtils } from '@utils/ParserUtils.ts'
import { ITypeUtils }  from '@utils/interfaces/ITypeUtils.ts'


export const TypeUtils: ITypeUtils = {
	mapToGame,
	mapToGamesPlatforms,
	mapToStores
}

function mapToGame(data: never): Game {
	const mappedData = ParserUtils.mapToCamelCase(data) as Game

	if (mappedData.platforms !== undefined) {
		mappedData.platforms
			= mapToGamesPlatforms(mappedData.platforms)
	}

	if (mappedData.developers) {
		mappedData.developers = mappedData.developers.map((d) => ParserUtils
			.mapToCamelCase(d as never) as Developer)
	}

	if (mappedData.publishers) {
		mappedData.publishers = mappedData.publishers.map(p => ParserUtils
			.mapToCamelCase(p as never) as Publisher)
	}

	if (mappedData.tags) {
		mappedData.tags = mappedData.tags.map(t => ParserUtils
			.mapToCamelCase(t as never) as Tag)
	}

	if (mappedData.genres) {
		mappedData.genres = mappedData.genres.map(g => ParserUtils
			.mapToCamelCase(g as never) as Genre)
	}

	if (mappedData.stores) {
		mappedData.stores = mapToStores(mappedData.stores)
	}

	return mappedData
}

function mapToStores(stores: Store[]): Store[] {
	return stores.map(store => {
		store.store
			= ParserUtils.mapToCamelCase(store.store as never) as typeof store.store

		return store
	})
}

function mapToGamesPlatforms(platforms: GamesPlatform[]): GamesPlatform[] {
	return platforms.map(mainPlatform => {
		mainPlatform.platform = ParserUtils
			.mapToCamelCase(mainPlatform.platform as never) as Platform

		return ParserUtils.mapToCamelCase(mainPlatform as never) as GamesPlatform
	})
}