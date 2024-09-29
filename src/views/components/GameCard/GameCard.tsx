import { IGameCard } from './IGameCard'
import style         from './GameCard.module.scss'


function GameCard({game}: IGameCard) {
	return (
		<article className={style.GameCard}>
            <header>
                <h2>{game.name} ({game.released})</h2>
                <p>{game.rating}</p>
            </header>
            
            <p></p>
        </article>
    )
}

export { GameCard }