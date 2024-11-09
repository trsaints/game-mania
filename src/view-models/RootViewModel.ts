import { DataServiceDictionary } from '@data/types'
import {
	GameService,
	GenreService,
	PlatformService,
	PublisherService,
	TagService
} from '@src/services'
import { LocalDb } from '@data/local-storage'
import { ApiMiddleware } from '@src/middlewares'
import { ApiMiddlewareFilter } from '@src/filters'
import { StartupUtils } from '@src/utils'
import { IRootViewModel } from '@src/view-models/interfaces/IRootViewModel.ts'


class RootViewModel implements IRootViewModel {
	dataServiceDictionary: DataServiceDictionary = {
		games     : new GameService(),
		genres    : GenreService,
		platforms : PlatformService,
		publishers: PublisherService,
		tags      : TagService
	}

	localDb       = new LocalDb('game-mania', 1)
	apiMiddleware = new ApiMiddleware(this.dataServiceDictionary,
									  this.localDb,
									  ApiMiddlewareFilter
	)

	constructor() {
		// Initialization moved to initializeDb method
	}

	async initializeDb(): Promise<void> {
		if (this.localDb.isCreated()) return Promise.resolve()

		await StartupUtils.initializeDb(this.localDb,
										this.dataServiceDictionary.games
		).then(isCreated => {
			console.log('database created: ', isCreated)
			return Promise.resolve()
		})
	}
}

export { RootViewModel }