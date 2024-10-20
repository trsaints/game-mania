import { Game, Screenshots } from '@data/types'
import { ImageCard } from '@views/components'
import * as React from 'react'
import { ComponentProps, PropsWithChildren, useState } from 'react'
import style from './GamePanel.module.scss'
import { IGamePanel } from './IGamePanel'


function GamePanel({ game, screenshots }: IGamePanel) {
	return (
		<article className={style.GamePanel}>
			<Header game={game}/>
			<Banner name={game.name} screenshots={screenshots}/>
		</article>
	)
}

interface IHeader extends PropsWithChildren {
	game: Game
}

function Header({ game }: IHeader) {
	const gameGenres = game.genres
		.slice(0, 3)
		.map(g =>
				 <li className={style.GenreTag}
					 key={`t-${g.id}`}
				 >{g.name}</li>
		)

	return (
		<header className={style.Header}>
			<h3>{game.name}</h3>

			<p className={style.Released}>Released at: {' '}
				<time dateTime={game.released}>
					{new Date(game.released).getFullYear()}
				</time>
			</p>

			<p className={style.Publisher}>Publisher: {game?.publishers[0]?.name}</p>

			<p className={style.Description}>{game.descriptionRaw}</p>

			<ul className={style.Tags}>{gameGenres}</ul>
		</header>
	)
}

interface IBanner extends ComponentProps<'article'> {
	name: string
	screenshots: Screenshots
}

function Banner({ name, screenshots }: IBanner) {
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	const selectImage = (e: React.MouseEvent<HTMLElement>) => {
		const target   = e.target as HTMLElement
		const listItem = target.closest('[data-index]') as HTMLLIElement

		if (! listItem) return

		const parsedIndex = listItem.dataset['index'] as unknown
		setCurrentIndex(parsedIndex as number)
	}

	return (
		<article className={style.Banner}>
			<figure className={style.Main}>
				<img
					src={screenshots?.results[currentIndex]?.image ?? ''}
					alt={`main banner for the "${name}" game`}
				/>
			</figure>

			<menu className={style.Screenshots} onClick={selectImage}>
				<ScreenshotsList name={name} screenshots={screenshots}/>
			</menu>
		</article>
	)
}

function ScreenshotsList({ screenshots, name }: IBanner) {
	return screenshots.results.map((img, i) => {
		return (
			<li key={`${img.id}-${typeof (img)}`} data-index={i}>
				<ImageCard img={img}
						   alt={`screenshot number 
						   		${i + 1} of the "${name}" game`}
				/>
			</li>
		)
	})
}

export { GamePanel }