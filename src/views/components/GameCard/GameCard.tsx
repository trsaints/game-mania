import style         from './GameCard.module.scss'
import { IGameCard } from './IGameCard'


function GameCard({game}: IGameCard) {
	const gameTags = game.tags.map(t => t.name).slice(0,3).join(', ')
	
	return (
		<article className={style.GameCard}>
			<header>
				<figure>
					<img className={style.Banner} src={game.backgroundImage} alt={`Promotional banner for the "${game.name}" game`}/>
					<figcaption className={style.Name}>{game.name}</figcaption>
				</figure>
			</header>
			
			<p className={style.Details}>
				Rating: {game.rating}/{game.ratingTop}
			</p>

			<p className={style.Genres}>
				Genre: {game.genres[0].name}
			</p>
			
			<p className={style.Tags}>
				Tags: {gameTags}
			</p>
		</article>
	)
}

export { GameCard }