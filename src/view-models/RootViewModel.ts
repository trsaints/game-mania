import { DataServiceDictionary } from '@data/types'
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
import { ApiService, IApiService } from '@src/services'


class RootViewModel implements IRootViewModel {
	constructor() {
		this._parserUtils         = new ParserUtils()
		this._typeUtils           = new TypeUtils(this._parserUtils)
		this._startupUtils        = new StartupUtils()
		this._apiMiddlewareFilter = new ApiMiddlewareFilter()

		this._dataServiceDictionary =
			new DataServiceDictionary(this._parserUtils, this._typeUtils)

		this.localDb       = new LocalDb('game-mania', 1)
		this.apiService    = new ApiService()
		this.apiMiddleware = new ApiMiddleware(this._dataServiceDictionary,
											   this.apiService,
											   this.localDb,
											   this._apiMiddlewareFilter
		)
	}

	private readonly _typeUtils: ITypeUtils
	private readonly _parserUtils: IParserUtils
	private readonly _startupUtils: IStartupUtils
	private readonly _dataServiceDictionary: DataServiceDictionary
	private readonly _apiMiddlewareFilter: IApiMiddlewareFilter

	public readonly apiMiddleware: IApiMiddleware
	public readonly localDb: ILocalDb<ApiData>
	public readonly apiService: IApiService

	async initializeDb(): Promise<void> {
		if (this.localDb.isCreated()) return Promise.resolve()

		await this._startupUtils.initializeDb(this.localDb,
											  this._dataServiceDictionary.games,
											  this.apiService
		).then(isCreated => {
			console.log('database created: ', isCreated)
			return Promise.resolve()
		})
	}
}

export { RootViewModel }