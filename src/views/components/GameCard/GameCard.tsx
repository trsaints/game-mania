import style from './GameCard.module.scss'
import { IGameCard } from './IGameCard'
import { CardHeader, CardScore } from '@views/components'
import { Game } from '@data/types'


export { GameCard }

function GameCard({ game, lazyLoad }: IGameCard) {
	return (
		<article className={style.GameCard} data-id={game.id}>
			<CardHeader game={game} lazyLoad={lazyLoad}/>
			<CardScore game={game}/>
			<CardMeta game={game}/>
		</article>
	)
}

interface ICardMeta {
	game: Game
}

function CardMeta({ game }: ICardMeta) {
	const gameTags = game.tags.map(t => t.name).slice(0, 3).join(', ')

	return (
		<>
			<p className={style.Tags}>
				tags: {gameTags}
			</p>

			<p className={style.Genres}>
				<span className="sr-only">Genre:</span>
				{game.genres[0]?.name ?? 'Not listed'}
			</p>
		</>
	)
}