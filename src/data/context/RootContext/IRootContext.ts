import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import {
	IApiMiddleware
}                                                from '@src/middlewares/interfaces/IApiMiddleware.ts'
import { Dispatch, SetStateAction }              from 'react'


export interface IRootContext {
	games?: Game[]
	genres?: Genre[]
	platforms?: Platform[]
	publishers?: Publisher[]
	selectedGame?: Game
	setGames: Dispatch<SetStateAction<Game[] | undefined>>
	setGenres: Dispatch<SetStateAction<Genre[] | undefined>>
	setPlatforms: Dispatch<SetStateAction<Platform[] | undefined>>
	setPublishers: Dispatch<SetStateAction<Publisher[] | undefined>>
	setSelectedGame: Dispatch<SetStateAction<Game | undefined>>
	setTags: Dispatch<SetStateAction<Tag[] | undefined>>
	tags?: Tag[],
	apiMiddleware?: IApiMiddleware
}