import { IRootContext, RootContext }             from '@data/context'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import {
	ApiMiddleware,
	DataServiceDictionary
}                                                from '@src/middlewares/ApiMiddleware.ts'
import {
	GameService,
	GenreService,
	PlatformService,
	PublisherService,
	TagService
}                                                from '@src/services'
import { PropsWithChildren, useState }           from 'react'


function RootContextProvider({ children }: PropsWithChildren) {
	const [gameSearch, setGameSearch]     = useState<string>()
	const [games, setGames]               = useState<Game[]>()
	const [genres, setGenres]             = useState<Genre[]>()
	const [platforms, setPlatforms]       = useState<Platform[]>()
	const [publishers, setPublishers]     = useState<Publisher[]>()
	const [selectedGame, setSelectedGame] = useState<Game>()
	const [tags, setTags]                 = useState<Tag[]>()

	const dataServiceDictionary: DataServiceDictionary = {
		games     : GameService,
		genres    : GenreService,
		platforms : PlatformService,
		publishers: PublisherService,
		tags      : TagService
	}

	const context: IRootContext = {
		gameSearch,
		games,
		genres,
		platforms,
		publishers,
		selectedGame,
		setGameSearch,
		setGames,
		setGenres,
		setPlatforms,
		setPublishers,
		setSelectedGame,
		setTags,
		tags,
		dataServiceDictionary,
		apiMiddleware: ApiMiddleware
	}

	return (
		<RootContext.Provider value={context}>
			{children}
		</RootContext.Provider>
	)
}

export { RootContextProvider }