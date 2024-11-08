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
import { IGameService } from '@src/services'


export const StartupUtils: IStartupUtils = {
	async initializeDb(db: ILocalDb<ApiData>,
					   gameService: IGameService
	): Promise<boolean> {
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

		if (isCreated) {
			const gameData = await gameService.getAll({
														  pageSize  : 40,
														  metacritic: '80,100'
													  })

			if (gameData.length < 1) return Promise.resolve(false)

			const savedResults = await db.addBulk('games', gameData)

			return Promise.resolve(savedResults.length < 1)
		}

		return Promise.resolve(isCreated)
	}
}

