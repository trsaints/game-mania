import {
	DataServiceDictionary,
	Genre,
	Platform,
	Publisher,
	Tag
} from '@data/types'
import { ApiData, ILocalDb, LocalDb } from '@data/local-storage'
import { ApiMiddleware, IApiMiddleware } from '@src/middlewares'
import { ApiMiddlewareFilter, IApiMiddlewareFilter } from '@src/filters'
import {
	IParserUtils,
	IStartupUtils,
	ITypeUtils,
	ParserUtils,
	StartupUtils,
	TypeUtils
} from '@src/utils'
import { IRootViewModel } from '@src/view-models/interfaces/IRootViewModel.ts'
import {
	ApiService,
	GameService,
	GenreService,
	IApiService,
	IDataService,
	IGameService,
	PlatformService,
	PublisherService,
	TagService
} from '@src/services'
import { ILocalDbFilter } from '@src/filters/interfaces/ILocalDbFilter.ts'
import { LocalDbFilter } from '@src/filters/LocalDbFilter.ts'


class RootViewModel implements IRootViewModel {
	constructor() {
		this._parserUtils         = new ParserUtils()
		this._typeUtils           = new TypeUtils()
		this._startupUtils        = new StartupUtils()
		this._apiMiddlewareFilter = new ApiMiddlewareFilter()
		this._localDbFilter       = new LocalDbFilter(this._parserUtils)

		this._gameService      =
			new GameService(this._parserUtils, this._typeUtils)
		this._genreService     = new GenreService(this._parserUtils)
		this._platformService  = new PlatformService(this._parserUtils)
		this._publisherService = new PublisherService(this._parserUtils)
		this._tagService       = new TagService(this._parserUtils)

		this._dataServiceDictionary =
			new DataServiceDictionary(this._gameService,
									  this._genreService,
									  this._platformService,
									  this._publisherService,
									  this._tagService
			)

		this.localDb       = new LocalDb('game-mania', 1)
		this.apiService    = new ApiService()
		this.apiMiddleware = new ApiMiddleware(this._dataServiceDictionary,
											   this.apiService,
											   this.localDb,
											   this._apiMiddlewareFilter,
											   this._localDbFilter
		)
	}

	private readonly _typeUtils: ITypeUtils
	private readonly _parserUtils: IParserUtils
	private readonly _startupUtils: IStartupUtils
	private readonly _dataServiceDictionary: DataServiceDictionary
	private readonly _apiMiddlewareFilter: IApiMiddlewareFilter
	private readonly _localDbFilter: ILocalDbFilter

	private readonly _gameService: IGameService
	private readonly _genreService: IDataService<Genre>
	private readonly _platformService: IDataService<Platform>
	private readonly _publisherService: IDataService<Publisher>
	private readonly _tagService: IDataService<Tag>

	public readonly apiMiddleware: IApiMiddleware
	public readonly localDb: ILocalDb<ApiData>
	public readonly apiService: IApiService

	async initializeDb(): Promise<void> {
		if (this.localDb.isCreated()) return Promise.resolve()

		await this._startupUtils.initializeDb(this.localDb,
											  this._gameService,
											  this.apiService
		).then(isCreated => {
			console.log('database created: ', isCreated)
			return Promise.resolve()
		})
	}
}

export { RootViewModel }