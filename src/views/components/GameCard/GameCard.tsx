import style from './GameCard.module.scss'
import { IGameCard } from './IGameCard'


function GameCard({ game }: IGameCard) {
	const gameTags = game.tags.map(t => t.name).slice(0, 3).join(', ')

	return (
		<article className={style.GameCard} data-id={game.id} tabIndex={0}>
			<header>
				<figure>
					<img className={style.Banner}
						 src={game.backgroundImage
							  ?? '/gamecard_placeholder.svg'}
						 alt={`Promotional banner for the "${game.name}" game`}
					/>
					<figcaption className={style.Name}>{game.name}</figcaption>
				</figure>
			</header>

			<p className={style.Tags}>
				<span className="sr-only">Tags:</span> {gameTags}
			</p>

			<p className={style.Genres}>
				<span className="sr-only">Genre:</span> {game.genres[0]?.name
														 ?? 'Not listed'}
			</p>
		</article>
	)
}

export { GameCard }