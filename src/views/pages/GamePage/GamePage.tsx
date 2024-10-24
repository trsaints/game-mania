import style from './GamePage.module.scss'
import { useContext, useEffect, useState } from 'react'
import { RootContext } from '@data/context'
import { useLoaderData } from 'react-router-dom'
import { Game } from '@data/types'
import { GamePanel } from '@views/components'


function GamePage() {
	const [selectedGame, setSelectedGame] = useState<Game>()
	const { apiMiddleware }               = useContext(RootContext)

	type GameId = {
		id: string
	}

	const gameId = useLoaderData() as GameId

	useEffect(() => {
		apiMiddleware?.getById('games', Number(gameId.id)).then(game => {
			setSelectedGame(game as Game)
		})
	}, [])

	const imagesToLoad = selectedGame?.shortScreenshots
						 ?? selectedGame?.screenshots?.results
						 ?? []

	return (
		<article className={style.GamePage}>
			{
				selectedGame ? (
								 <>
									 <GamePanel game={selectedGame} images={imagesToLoad}/>
								 </>
							 )
							 : <h2>loading...</h2>
			}
		</article>
	)
}

export { GamePage }