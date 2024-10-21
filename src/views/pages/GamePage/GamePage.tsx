import style from './GamePage.module.scss'
import { useContext, useEffect, useState } from 'react'
import { RootContext } from '@data/context'
import { useLoaderData } from 'react-router-dom'
import { Game } from '@data/types'


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

	return (
		<article className={style.GamePage}>
			<h1>{selectedGame?.name}</h1>
		</article>
	)
}

export { GamePage }