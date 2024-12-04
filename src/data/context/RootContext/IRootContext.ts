import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { IApiMiddleware } from '@src/middlewares'
import { Dispatch, SetStateAction } from 'react'


export interface IRootContext {
	games: Game[]
	genres: Genre[]
	platforms: Platform[]
	publishers: Publisher[]
	tags: Tag[],
	setGames: Dispatch<SetStateAction<Game[] | undefined>>
	setGenres: Dispatch<SetStateAction<Genre[] | undefined>>
	setPlatforms: Dispatch<SetStateAction<Platform[] | undefined>>
	setPublishers: Dispatch<SetStateAction<Publisher[] | undefined>>
	setTags: Dispatch<SetStateAction<Tag[] | undefined>>
	apiMiddleware?: IApiMiddleware
}