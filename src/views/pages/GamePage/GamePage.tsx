import style from './GamePage.module.scss'
import { useContext, useState } from 'react'
import { RootContext } from '@data/context'
import { Link, useLoaderData } from 'react-router-dom'
import { Game } from '@data/types'
import { GamePageList, GamePanel } from '@views/components'
import { useGamePage } from '@src/hooks/useGamePage.ts'
import { GameDetails } from '@views/components/GameDetails'


export type GameId = { id: string }

function GamePage() {
	const rootContext = useContext(RootContext)
	const { games }   = rootContext

	const searchParams = useLoaderData() as GameId

	const [selectedGame, setSelectedGame] = useState<Game>()
	const gameGenres                      = selectedGame?.genres.join(',')

	useGamePage(rootContext, searchParams, setSelectedGame, gameGenres)

	const gameGenre = selectedGame?.genres[0].name

	return (
		<article className={style.GamePage}
				 id="game-page"
		>
			{
				selectedGame
				&& games ? (
					<>
						<GamePanel game={selectedGame}/>

						<GameDetails game={selectedGame}/>

						<aside>
							<header className={style.SuggestionsHeader}>
								<h3 className={style.SuggestionsTitle}>More {gameGenre} games</h3>

								<Link className={style.SuggestionsLink}
									  to="/search"
									  relative="path">
									See all "{gameGenre}" games
								</Link>
							</header>

							<GamePageList games={games.slice(0, 20)}/>
						</aside>

					</>
				)
						 : <h2>loading...</h2>
			}
		</article>
	)
}

export { GamePage }