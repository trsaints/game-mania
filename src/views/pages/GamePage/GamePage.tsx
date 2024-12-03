import style from './GamePage.module.scss'
import { useContext, useState } from 'react'
import { RootContext } from '@data/context'
import { useLoaderData } from 'react-router-dom'
import { Game } from '@data/types'
import { GamePageList, GamePanel } from '@views/components'
import { useGamePage } from '@src/hooks/useGamePage.ts'
import { GameDetails } from '@views/components/GameDetails'
import { LoadingScreen } from '@views/components/LoadingScreen'
import { usePageList } from '@src/hooks/usePageList.ts'


export type GameId = { id: string }

function GamePage() {
	const rootContext = useContext(RootContext)
	const pageStates  = usePageList()
	const { games }   = rootContext

	const searchParams = useLoaderData() as GameId

	const [selectedGame, setSelectedGame] = useState<Game>()
	const gameGenres                      = selectedGame?.genres.join(',')

	useGamePage(rootContext, searchParams, setSelectedGame, gameGenres)

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


						<GamePageList.Root games={games.slice(0, 20)}>

						</GamePageList.Root>
					</>
				)
						 : <LoadingScreen/>
			}
		</article>
	)
}

export { GamePage }