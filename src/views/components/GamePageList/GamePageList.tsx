import { IGamePageList } from './IGamePageList.ts'
import style from './GamePageList.module.scss'
import { GamesList } from '@views/components'
import { Game } from '@data/types'
import {
	IGamePageListViewModel
} from '@src/view-models/interfaces/IGamePageListViewModel.ts'


export const GamePageList = {
	Root,
	ListResults
}

function Root(props: IGamePageList) {
	const { games, children, withFilter } = props

	const className = withFilter
					  ? `${style.GamePageList} ${style.WithFilter}`
					  : style.GamePageList

	return (
		<article className={className}>
			<h3 className={style.ResultsCount}
				id="results-count">
				{games.length} games found
			</h3>

			{children}
		</article>
	)
}

interface IListResults {
	games: Game[]
	currentPage: number
	itemCount: number
	viewModel: IGamePageListViewModel
}

function ListResults(props: IListResults) {
	const { games, currentPage, itemCount, viewModel } = props

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
