import { IRootContext, RootContext }             from '@data/context'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
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

	const context: IRootContext = {
		gameSearch,
		gameService     : GameService,
		games,
		genreService    : GenreService,
		genres,
		platformService : PlatformService,
		platforms,
		publisherService: PublisherService,
		publishers,
		selectedGame,
		setGameSearch,
		setGames,
		setGenres,
		setPlatforms,
		setPublishers,
		setSelectedGame,
		setTags,
		tagService      : TagService,
		tags
	}

	return (
		<RootContext.Provider value={context}>
			{children}
		</RootContext.Provider>
	)
}

export { RootContextProvider }