import { IGamePageList } from './IGamePageList.ts'
import style from './GamePageList.module.scss'
import { CountFilter, GamesList, PageSelection } from '@views/components'
import { useState } from 'react'
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
			<h3 className={style.ResultsCount}>{games.length} games found</h3>

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
						   parentViewModel={viewModel}/>
		</section>
	)
}

