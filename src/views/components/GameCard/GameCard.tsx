import { IGameCard } from './IGameCard'
import style         from './GameCard.module.scss'


function GameCard({game}: IGameCard) {
	return (
		<article className={style.GameCard}>
            <header>
                <h2>Name: {game.name}</h2>
				<p>Released at: {new Date(game.released).getFullYear()}</p>
                <p>Rating: {game.rating}/{game.ratingTop}</p>
            </header>
			
            <p>Genre: {game.genres[0].name}</p>
        </article>
    )
}

export { GameCard }