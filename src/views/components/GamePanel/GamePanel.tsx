import style          from './GamePanel.module.scss'
import { IGamePanel } from './IGamePanel'


function GamePanel({game, screenshots}: IGamePanel) {
	const gameGenres = game.genres.slice(0, 3)
						   .map(g => <li key={`t-${g.id}`}>{g.name}</li>)

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

				<p>{game.descriptionRaw}</p>

				<ul>{gameGenres}</ul>
			</header>

			<article>
				<figure>
					<img src={screenshots.results[0].image ?? ''} alt=""/>
					<figcaption></figcaption>
				</figure>

				<menu>
					<li>
						<img src={screenshots.results[1].image ?? ''} alt=""/>
						<button>Click to see</button>
					</li>
					<li>
						<img src={screenshots.results[2].image ?? ''} alt=""/>
						<button>Click to see</button>
					</li>
					<li>
						<img src={screenshots.results[3].image ?? ''} alt=""/>
						<button>Click to see</button>
					</li>
				</menu>
			</article>
		</article>
	)
}

export { GamePanel }