import { IGamePageList } from './IGamePageList.ts'
import style from './GamePageList.module.scss'
import { CountFilter, GamesList, PageSelection } from '@views/components'
import { useState } from 'react'
import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'
import { Game } from '@data/types'
import { SearchControls } from '@views/pages'


export { GamePageList }

const viewModel = new GamePageListViewModel()

function GamePageList(props: IGamePageList) {
	const [itemCount, setItemCount]     = useState(10)
	const [currentPage, setCurrentPage] = useState(0)

	const { games, withFilter } = props

	return (
		<article className={style.GamePageList}>
			<h3 className={style.ResultsCount}
				id="results-count">
				{games.length} games found
			</h3>

			<CountFilter onHandleSubmit={(e) => {
				viewModel.changeItemCount(e, setItemCount)
			}}/>

			{withFilter && <SearchControls {...props} />}

			<ListResults games={games}
						 currentPage={currentPage}
						 itemCount={itemCount}/>

			<PageSelection gamesCount={games.length}
						   itemCount={itemCount}
						   setCurrentPage={setCurrentPage}
						   parentViewModel={viewModel}/>
		</article>
	)
}

interface IListResults {
	games: Game[]
	currentPage: number
	itemCount: number
}

function ListResults({ games, currentPage, itemCount }: IListResults) {

	const currentGames = games.slice(currentPage * itemCount,
									 itemCount + (currentPage * itemCount))

	if (games.length > 0) {
		return <GamesList currentGames={currentGames}
						  onHandleClick={(e) => {
							  viewModel.openGamePage(e)
						  }}/>
	}


	return <ListPlaceholder/>
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
