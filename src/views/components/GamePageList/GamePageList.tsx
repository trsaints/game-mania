import { IGamePageList } from './IGamePageList.ts'
import style from './GamePageList.module.scss'
import { CountFilter, GamesList, PageSelection } from '@views/components'
import { useState } from 'react'
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

	return (
		<section className={style.GamePageList}>
			<h3 className={style.ResultsCount}
				id="results-count">
				{games.length} games found
			</h3>

			<CountFilter onHandleSubmit={(e) => {
				viewModel.changeItemCount(e, setItemCount)
			}}/>

			{
				games.length > 0 ?
				<GamesList currentGames={currentGames}
						   onHandleClick={(e) => {
							   viewModel.openGamePage(e)
						   }}
				/> : <ListPlaceholder/>
			}

			<PageSelection gamesCount={games.length}
						   itemCount={itemCount}
						   setCurrentPage={setCurrentPage}
						   parentViewModel={viewModel}/>
		</section>
	)
}

function ListPlaceholder() {
	return (
		<aside className={style.EmptyPlaceholder}>
			<h3>oops!</h3>
			<p>We couldn't find any results based on your filters.
				Maybe you should try to reset them</p>
		</aside>
	)
}
