import { Genre, Platform, Publisher, Tag } from '@data/types'
import { IDataService, IGameService } from '@src/services'


export type DataServiceDictionary = {
	games: IGameService
	genres: IDataService<Genre>
	platforms: IDataService<Platform>
	publishers: IDataService<Publisher>
	tags: IDataService<Tag>
}