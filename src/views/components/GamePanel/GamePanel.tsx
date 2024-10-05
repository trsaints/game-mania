import { GameData, Screenshots } from '@data/types'
import { ImageCard }             from '@views/components'
import { PropsWithChildren } from 'react'
import style                 from './GamePanel.module.scss'
import { IGamePanel }        from './IGamePanel'


function GamePanel({ game, screenshots }: IGamePanel) {
	return (
		<article className={style.GamePanel}>
			<Header game={game}/>
			<Banner name={game.name} screenshots={screenshots}/>
		</article>
	)
}

interface IHeader extends PropsWithChildren {
	game: GameData
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

interface IBanner extends PropsWithChildren {
	name: string
	screenshots: Screenshots
}

function Banner({ name, screenshots }: IBanner) {
	const screenshotsList = screenshots.results.map((img, i) => {
		return (
			<li key={`${img.id}-${typeof (img)}`}>
				<ImageCard img={img}
						   alt={`screenshot number 
						   		${i + 1} of the "${name}" game`}
				/>
			</li>
		)
	})

	return (
		<article className={style.Banner}>
			<figure className={style.Main}>
				<img
					src={screenshots?.results[0]?.image ?? ''}
					alt={`main banner for the "${name}" game`}
				/>
			</figure>

			<menu className={style.Screenshots}>
				{screenshotsList}
			</menu>
		</article>
	)
}

export { GamePanel }