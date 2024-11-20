import { Genre, Platform, Publisher, Tag } from '@data/types'
import { IDataService, IGameService } from '@src/services'


export class DataServiceDictionary {
	constructor(
		gameService: IGameService,
		genreService: IDataService<Genre>,
		platformService: IDataService<Platform>,
		publisherService: IDataService<Publisher>,
		tagService: IDataService<Tag>
	) {
		this.games      = gameService
		this.genres     = genreService
		this.platforms  = platformService
		this.publishers = publisherService
		this.tags       = tagService
	}

	public readonly games: IGameService
	public readonly genres: IDataService<Genre>
	public readonly platforms: IDataService<Platform>
	public readonly publishers: IDataService<Publisher>
	public readonly tags: IDataService<Tag>
}