import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { IDataService, IGameService }            from '@src/services'
import { Dispatch, SetStateAction }              from 'react'


export interface IRootContext {
	gameSearch?: string
	gameService?: IGameService
	games?: Game[]
	genreService?: IDataService<Genre>
	genres?: Genre[]
	platformService?: IDataService<Platform>
	platforms?: Platform[]
	publisherService?: IDataService<Publisher>
	publishers?: Publisher[]
	selectedGame?: Game
	setGameSearch: Dispatch<SetStateAction<string | undefined>>
	setGames: Dispatch<SetStateAction<Game[] | undefined>>
	setGenres: Dispatch<SetStateAction<Genre[] | undefined>>
	setPlatforms: Dispatch<SetStateAction<Platform[] | undefined>>
	setPublishers: Dispatch<SetStateAction<Publisher[] | undefined>>
	setSelectedGame: Dispatch<SetStateAction<Game | undefined>>
	setTags: Dispatch<SetStateAction<Tag[] | undefined>>
	tagService?: IDataService<Tag>
	tags?: Tag[]
}