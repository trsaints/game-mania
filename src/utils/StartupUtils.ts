import { ApiData, ILocalDb } from '@data/local-storage'
import {
	Game, Genre, LocalDbStore, Platform, Publisher, Tag
} from '@data/types'
import { IStartupUtils } from '@utils/interfaces/IStartupUtils.ts'
import { IApiService, IGameService } from '@src/services'
import { DbSchema } from '@data/types/DbSchema.ts'


export class StartupUtils implements IStartupUtils {
	async initializeDb(db: ILocalDb<ApiData>,
					   gameService: IGameService,
					   apiService: IApiService
	): Promise<boolean> {
		console.log('initializing database')

		const isCreated = await db.create(this.getDbSchema())

		await this.seedDb(isCreated, db, gameService, apiService)

		return Promise.resolve(isCreated)
	}

	getDbSchema(): DbSchema {
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

		return [
			gameSchema,
			platformSchema,
			genreSchema,
			tagSchema,
			publisherSchema
		]
	}

	async seedDb(isCreated: boolean,
				 db: ILocalDb<ApiData>,
				 gameService: IGameService,
				 apiService: IApiService
	): Promise<boolean> {
		if (! isCreated) return Promise.reject(false)

		const gameData = await gameService.getAll({
													  pageSize  : 40,
													  metacritic: '80,100'
												  },
												  apiService
		)

		if (gameData.length < 1) return Promise.resolve(false)

		const savedResults = await db.addBulk('games', gameData)

		return Promise.resolve(savedResults.length < 1)
	}
}

