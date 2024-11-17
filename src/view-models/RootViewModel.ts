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
import { ParserUtils, StartupUtils, TypeUtils } from '@src/utils'
import { IRootViewModel } from '@src/view-models/interfaces/IRootViewModel.ts'
import { ApiService } from '@services/ApiService.ts'


class RootViewModel implements IRootViewModel {
	private readonly _parserUtils = new ParserUtils()
	private readonly _typeUtils   = new TypeUtils(this._parserUtils)

	dataServiceDictionary: DataServiceDictionary = {
		games     : new GameService(this._parserUtils, this._typeUtils),
		genres    : new GenreService(this._parserUtils),
		platforms : new PlatformService(this._parserUtils),
		publishers: new PublisherService(this._parserUtils),
		tags      : new TagService(this._parserUtils)
	}

	public readonly apiService    = new ApiService()
	public readonly localDb       = new LocalDb('game-mania', 1)
	public readonly apiMiddleware = new ApiMiddleware(this.dataServiceDictionary,
													  this.apiService,
													  this.localDb,
													  ApiMiddlewareFilter
	)

	async initializeDb(): Promise<void> {
		if (this.localDb.isCreated()) return Promise.resolve()

		await StartupUtils.initializeDb(this.localDb,
										this.dataServiceDictionary.games,
										this.apiService
		).then(isCreated => {
			console.log('database created: ', isCreated)
			return Promise.resolve()
		})
	}
}

export { RootViewModel }