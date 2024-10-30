import { ApiData, ILocalDb } from '@data/local-storage'
import {
	Game,
	Genre,
	LocalDbStore,
	Platform,
	Publisher,
	Tag
} from '@data/types'
import { IStartupUtils } from '@utils/interfaces/IStartupUtils.ts'


export const StartupUtils: IStartupUtils = {
	initializeDb
}

async function initializeDb(db: ILocalDb<ApiData>): Promise<boolean> {
	const gameSchema: LocalDbStore<Game> = {
		name         : 'games',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const genreSchema: LocalDbStore<Genre> = {
		name         : 'genres',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const platformSchema: LocalDbStore<Platform> = {
		name         : 'platforms',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const tagSchema: LocalDbStore<Tag> = {
		name         : 'tags',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const publisherSchema: LocalDbStore<Publisher> = {
		name         : 'publishers',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const isCreated = await db.create([
										  gameSchema,
										  platformSchema,
										  genreSchema,
										  tagSchema,
										  publisherSchema
									  ])

	return Promise.resolve(isCreated)
}