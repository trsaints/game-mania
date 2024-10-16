import { IGamePageList }                                         from './IGamePageList.ts'
import style
																 from './GamePageList.module.scss'
import {
	GameCard
}                                                                from '@views/components'
import { ComponentProps, FormEvent, FormEventHandler, useState } from 'react'

export { GamePageList }

function GamePageList({ games, pageCount }: IGamePageList) {
	const [itemCount, setItemCount] = useState(10)
	const [currentPage, setCurrentPage] = useState(1)

	const currentGames = games.slice(0, itemCount)

	const changeItemCount = (e: FormEvent) => {
		e.preventDefault()

		const targetData = new FormData(e.target as HTMLFormElement)
		const newCount = Number(targetData.get('item-count'))

		if (! newCount) {
			return
		}

		setItemCount(newCount)
	}

	return (
		<>
			<CountFilter onHandleSubmit={changeItemCount}/>

			<ul className={style.GameList}>
				{currentGames.map(game => (
					<li key={`game-${game.id}`}>
						<GameCard game={game}/>
					</li>
				))
				}
			</ul>

			<PageSelection pageCount={pageCount}/>
		</>
	)
}

interface ICountFilter extends ComponentProps<'form'> {
	onHandleSubmit: FormEventHandler
}

function CountFilter({ onHandleSubmit }: ICountFilter) {
	return (
		<form onSubmit={onHandleSubmit}>
			<label form="item-count">Items per page:</label>
			<input type="search" name="item-count" id="item-count"/>
			<button type="submit">save</button>
		</form>
	)
}

interface IPageSelection extends ComponentProps<'menu'> {
	pageCount: number
}

function PageSelection({ pageCount }: IPageSelection) {
	const pageButtons = Array.from({ length: pageCount }, (_, i) => i + 1).map(
		pageIndex => <button type="button">{pageIndex}</button>
	)

	return (
		<menu>{pageButtons}</menu>
	)
}