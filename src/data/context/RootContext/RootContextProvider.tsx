import { IRootContext, RootContext } from '@data/context'
import { Game, Genre, Platform, Publisher, Tag } from '@data/types'
import { useState } from 'react'
import {
	IRootContextProvider
} from '@data/context/RootContext/IRootContextProvider.ts'


function RootContextProvider(props: IRootContextProvider) {
	const { children, apiMiddleware } = props

	const [games, setGames]           = useState<Game[]>([])
	const [genres, setGenres]         = useState<Genre[]>([])
	const [platforms, setPlatforms]   = useState<Platform[]>([])
	const [publishers, setPublishers] = useState<Publisher[]>([])
	const [tags, setTags]             = useState<Tag[]>([])

	const context: IRootContext = {
		games,
		genres,
		platforms,
		publishers,
		setGames,
		setGenres,
		setPlatforms,
		setPublishers,
		setTags,
		tags,
		apiMiddleware
	}

	return (
		<RootContext.Provider value={context}>
			{children}
		</RootContext.Provider>
	)
}

export { RootContextProvider }