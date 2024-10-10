import { IRootContext, RootContext }             from '@data/context'
import { LocalDb }                               from '@data/local-storage'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import {
	DataServiceDictionary
}                                                from '@data/types/DataServiceDictionary.ts'
import {
	ApiMiddleware
}                                                from '@src/middlewares/ApiMiddleware.ts'
import {
	GameService,
	GenreService,
	PlatformService,
	PublisherService,
	TagService
}                                                from '@src/services'
import { StartupUtils }                          from '@utils/StartupUtils.ts'
import { PropsWithChildren, useState }           from 'react'


function RootContextProvider({ children }: PropsWithChildren) {
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

	const localDb = new LocalDb('game-mania', 1)

	const context: IRootContext = {
		games,
		genres,
		platforms,
		publishers,
		selectedGame,
		setGames,
		setGenres,
		setPlatforms,
		setPublishers,
		setSelectedGame,
		setTags,
		tags,
		apiMiddleware: new ApiMiddleware(dataServiceDictionary, localDb)
	}
	
	StartupUtils.initializeDb(localDb)

	return (
		<RootContext.Provider value={context}>
			{children}
		</RootContext.Provider>
	)
}

export { RootContextProvider }