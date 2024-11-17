import { Genre, Platform, Publisher, Tag } from '@data/types'
import {
	GameService,
	GenreService,
	IDataService,
	IGameService,
	PlatformService,
	PublisherService,
	TagService
} from '@src/services'
import { IParserUtils, ITypeUtils } from '@src/utils'


export class DataServiceDictionary {
	constructor(parserUtils: IParserUtils, typeUtils: ITypeUtils) {
		this.games      = new GameService(parserUtils, typeUtils)
		this.genres     = new GenreService(parserUtils)
		this.platforms  = new PlatformService(parserUtils)
		this.publishers = new PublisherService(parserUtils)
		this.tags       = new TagService(parserUtils)
	}

	public readonly games: IGameService
	public readonly genres: IDataService<Genre>
	public readonly platforms: IDataService<Platform>
	public readonly publishers: IDataService<Publisher>
	public readonly tags: IDataService<Tag>
}