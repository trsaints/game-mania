import style          from './GamePanel.module.scss'
import { IGamePanel } from './IGamePanel'


function GamePanel({game}: IGamePanel) {
	const gameTags = game.tags.slice(0,3).map(t => <li key={`t-${t.id}`}>{t.name}</li>)

	return (
		<article className={style.GamePanel}>
			<header>
				<h3>{game.name}</h3>

				<p>Released at:
					<time dateTime={game.released}>
						{new Date(game.released).getFullYear()}
					</time>
				</p>

				<p>Publisher: {game.publishers[0].name}</p>
			</header>

			<p>{game.descriptionRaw}</p>

			<ul>{gameTags}</ul>
		</article>
	)
}

export { GamePanel }