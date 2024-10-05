import { GameContext }                                from '@data/context'
import { Genre, Platform, Publisher, Tag }            from '@data/types'
import {
	PlatformService
}                                                     from '@services/PlatformService/PlatformService.ts'
import { GenreService, PublisherService, TagService } from '@src/services'
import { GameCard }                                   from '@views/components'
import {
	SearchFilter
}                                                     from '@views/components/SearchFilter'
import { useContext, useEffect, useState }            from 'react'
import style
													  from './Search.module.scss'


function Search() {
	const [publishers, setPublishers] = useState<Publisher[]>([])
	const [platforms, setPlatforms]   = useState<Platform[]>([])
	const [genres, setGenres]         = useState<Genre[]>([])
	const [tags, setTags]             = useState<Tag[]>([])

	useEffect(() => {
		PublisherService.getPublishers({}).then(p => setPublishers(p))
		PlatformService.getPlatforms({}).then(p => setPlatforms(p))
		GenreService.getGenres({}).then(g => setGenres(g))
		TagService.getTags({}).then(t => setTags(t))
	}, [])

	const gameContext = useContext(GameContext)

	const gameList = gameContext.games.map(g =>
											   (<li key={`game-${g.id}`}>
												   <GameCard game={g}/></li>))

	return (
		<main className={style.Search}>
			<h2>Search your next favorite game</h2>

			<SearchFilter publishers={publishers}
						  platforms={platforms}
						  genres={genres}
						  tags={tags}
			/>

			<ul className={style.GameList}>{gameList}</ul>
		</main>
	)
}

export { Search }