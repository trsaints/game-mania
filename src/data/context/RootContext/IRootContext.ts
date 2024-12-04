import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'
import { Dispatch, SetStateAction } from 'react'


export interface IRootContext {
	games: Game[]
	genres: Genre[]
	platforms: Platform[]
	publishers: Publisher[]
	tags: Tag[],
	setGames: Dispatch<SetStateAction<Game[]>>
	setGenres: Dispatch<SetStateAction<Genre[]>>
	setPlatforms: Dispatch<SetStateAction<Platform[]>>
	setPublishers: Dispatch<SetStateAction<Publisher[]>>
	setTags: Dispatch<SetStateAction<Tag[]>>
	apiMiddleware?: IApiMiddleware
}