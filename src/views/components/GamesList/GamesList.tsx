import React, { ComponentProps } from 'react'
import { Game } from '@data/types'
import style from './GamesList.module.scss'
import { GameCard } from '@views/components'
import { Link } from 'react-router-dom'


interface IGamesList extends ComponentProps<'ul'> {
	currentGames: Game[]

	onHandleClick(e: React.MouseEvent): void
}

export function GamesList({ currentGames, onHandleClick }: IGamesList) {
	return (
		<ul className={style.GamesList} onClick={onHandleClick}>
			{currentGames.map(game => (
				<li key={`game-${game.id}`}>
					<Link className={style.CardAnchor}
						  to={`/search/${game.id}`}
						  relative="path">
						<GameCard game={game}/>
					</Link>
				</li>
			))
			}
		</ul>
	)
}