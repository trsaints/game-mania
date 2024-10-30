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


export { RootViewModel }

class RootViewModel {
	dataServiceDictionary: DataServiceDictionary = {
		games     : GameService,
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
		if (! this.localDb.isCreated()) {
			StartupUtils.initializeDb(this.localDb).then(isCreated => {
				console.log('database created: ', isCreated)
			})
		}
	}
}