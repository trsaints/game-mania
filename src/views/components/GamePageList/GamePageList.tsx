import { IGamePageList } from './IGamePageList.ts'
import style from './GamePageList.module.scss'
import { GameCard, PageSelection } from '@views/components'
import { ComponentProps, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'


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

			<ul className={style.GameList}
				onClick={(e) => viewModel.openGamePage(e, navigator)}>
				{currentGames.map(game => (
					<li key={`game-${game.id}`}>
						<GameCard game={game}/>
					</li>
				))
				}
			</ul>

			<PageSelection gamesCount={games.length}
						   itemCount={itemCount}
						   setCurrentPage={setCurrentPage}
						   viewModel={viewModel}/>
		</section>
	)
}

interface ICountFilter extends ComponentProps<'form'> {
	onHandleSubmit: FormEventHandler
}

function CountFilter({ onHandleSubmit }: ICountFilter) {
	return (
		<form className={style.CountFilter} onSubmit={onHandleSubmit}>
			<label htmlFor="item-count">Items per page:</label>
			<input type="search" name="item-count" id="item-count"/>
			<button className="primary" type="submit">save</button>
		</form>
	)
}

