import { IGamePageList } from './IGamePageList.ts'
import style from './GamePageList.module.scss'
import { CountFilter, GameCard, PageSelection } from '@views/components'
import React, { ComponentProps, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'
import { Game } from '@data/types'


export { GamePageList }

const viewModel = new GamePageListViewModel()

function GamePageList({ games }: IGamePageList) {
	const [itemCount, setItemCount]     = useState(10)
	const [currentPage, setCurrentPage] = useState(0)

	const currentGames = games.slice(currentPage * itemCount,
									 itemCount + (currentPage * itemCount)
	)

	const navigator = useNavigate()

	return (
		<section className={style.GamePageList}>
			<h3>{games.length} games found</h3>

			<CountFilter onHandleSubmit={(e) => viewModel.changeItemCount(e,
																		  setItemCount
			)}/>

			<GamesList currentGames={currentGames}
					   onHandleClick={(e) => viewModel.openGamePage(e,
																	navigator
					   )}
			/>

			<PageSelection gamesCount={games.length}
						   itemCount={itemCount}
						   setCurrentPage={setCurrentPage}
						   viewModel={viewModel}/>
		</section>
	)
}

interface IGamesList extends ComponentProps<'ul'> {
	currentGames: Game[]
	onHandleClick(e: React.MouseEvent): void
}

function GamesList({ currentGames, onHandleClick }: IGamesList) {
	return (
		<ul className={style.GameList} onClick={onHandleClick}>
			{currentGames.map(game => (
				<li key={`game-${game.id}`}>
					<GameCard game={game}/>
				</li>
			))
			}
		</ul>
	)
}