import { Genre }                      from '@data/types/Genre.ts'
import { Platform }                   from '@data/types/Platform.ts'
import { Publisher }                  from '@data/types/Publisher.ts'
import { Tag }                        from '@data/types/Tag.ts'
import { IDataService, IGameService } from '@src/services'


export type DataServiceDictionary = {
	games: IGameService
	genres: IDataService<Genre>
	platforms: IDataService<Platform>
	publishers: IDataService<Publisher>
	tags: IDataService<Tag>
}