import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import {
	DataServiceDictionary, IApiMiddleware
} from '@src/middlewares/ApiMiddleware.ts'
import { Dispatch, SetStateAction }              from 'react'


export interface IRootContext {
	gameSearch?: string
	games?: Game[]
	genres?: Genre[]
	platforms?: Platform[]
	publishers?: Publisher[]
	selectedGame?: Game
	setGameSearch: Dispatch<SetStateAction<string | undefined>>
	setGames: Dispatch<SetStateAction<Game[] | undefined>>
	setGenres: Dispatch<SetStateAction<Genre[] | undefined>>
	setPlatforms: Dispatch<SetStateAction<Platform[] | undefined>>
	setPublishers: Dispatch<SetStateAction<Publisher[] | undefined>>
	setSelectedGame: Dispatch<SetStateAction<Game | undefined>>
	setTags: Dispatch<SetStateAction<Tag[] | undefined>>
	tags?: Tag[],
	dataServiceDictionary: DataServiceDictionary
	apiMiddleware: IApiMiddleware
}