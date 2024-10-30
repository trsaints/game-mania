import { IGamePageList } from './IGamePageList.ts'
import style from './GamePageList.module.scss'
import { GameCard } from '@views/components'
import React, {
	ComponentProps,
	Dispatch,
	FormEvent,
	FormEventHandler,
	SetStateAction,
	useState
} from 'react'
import { useNavigate } from 'react-router-dom'


export { GamePageList }

function GamePageList({ games }: IGamePageList) {
	const [itemCount, setItemCount]     = useState(10)
	const [currentPage, setCurrentPage] = useState(0)

	const currentGames = games.slice(currentPage * itemCount,
									 itemCount + (currentPage * itemCount)
	)

	const navigator = useNavigate()

	const openGamePage = (e: React.MouseEvent) => {
		const target       = e.target as HTMLElement
		const selectedCard = target.closest('[data-id]') as HTMLElement

		if (! selectedCard) return

		navigator(`/search/${selectedCard.dataset['id']}`)

		setTimeout(() => {
			window.location.hash = '#game-page'
		}, 200)
	}

	const changeItemCount = (e: FormEvent) => {
		e.preventDefault()

		const targetData = new FormData(e.target as HTMLFormElement)
		const newCount   = Number(targetData.get('item-count'))

		if (! newCount) return

		setItemCount(newCount)
	}


	return (
		<section className={style.GamePageList}>
			<h3>{games.length} games found</h3>

			<CountFilter onHandleSubmit={changeItemCount}/>

			<ul className={style.GameList} onClick={openGamePage}>
				{currentGames.map(game => (
					<li key={`game-${game.id}`}>
						<GameCard game={game}/>
					</li>
				))
				}
			</ul>

			<PageSelection gamesCount={games.length}
						   itemCount={itemCount}
						   setCurrentPage={setCurrentPage}/>
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

interface IPageSelection extends ComponentProps<'menu'> {
	gamesCount: number
	itemCount: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

function PageSelection({
						   gamesCount,
						   itemCount,
						   setCurrentPage
					   }: IPageSelection) {
	const pageCount   = gamesCount / itemCount
	const pageButtons = Array.from({
									   length: pageCount > 1
											   ? pageCount + 1
											   : 1
								   },
								   (_, i) => i
	).map(
		pageIndex => (
			<li key={`page-${pageIndex}`}>
				<button data-page={pageIndex} type="button">{pageIndex
															 + 1}</button>
			</li>
		)
	)

	const changePage = (e: React.MouseEvent<HTMLMenuElement>) => {
		const target        = e.target as HTMLMenuElement
		const pressedButton = target.closest('[data-page]') as HTMLButtonElement

		if (! pressedButton) {
			return
		}

		setCurrentPage(Number(pressedButton.dataset['page']))
	}

	return (
		<menu className={style.PageSelection}
			  onClick={changePage}>{pageButtons}</menu>
	)
}