import style from './GamePage.module.scss'
import { useContext, useEffect, useState } from 'react'
import { RootContext } from '@data/context'
import { Link, useLoaderData } from 'react-router-dom'
import { Game } from '@data/types'
import { GamePageList, GamePanel } from '@views/components'


function GamePage() {
	const [selectedGame, setSelectedGame]    = useState<Game>()
	const { apiMiddleware, games, setGames } = useContext(RootContext)

	type GameId = {
		id: string
	}

	const searchParams = useLoaderData() as GameId
	const gameGenres   = selectedGame?.genres.join(',')

	useEffect(() => {
		apiMiddleware?.getById('games', Number(searchParams.id)).then(game => {
			setSelectedGame(game as Game)
		})
		apiMiddleware?.getAll('games', { genres: gameGenres }).then(games => {
			setGames(games as Game[])
		})
	}, [searchParams])

	const imagesToLoad = selectedGame?.shortScreenshots
						 ?? selectedGame?.screenshots?.results
						 ?? []

	const gameGenre = selectedGame?.genres[0].name

	return (
		<article className={style.GamePage}
				 id="game-page"
		>
			{
				selectedGame
				&& games ? (
					<>
						<GamePanel game={selectedGame} images={imagesToLoad}/>

						<aside>
							<h3 className={style.SuggestionsHeader}>More {gameGenre} games</h3>

							<GamePageList games={games.slice(0, 20)}/>
							<Link className={style.SuggestionsLink}
								  to="/search"
								  relative="path">
								See all "{gameGenre}" games
							</Link>
						</aside>

					</>
				)
						 : <h2>loading...</h2>
			}
		</article>
	)
}

export { GamePage }