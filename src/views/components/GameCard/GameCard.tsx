import style from './GameCard.module.scss'
import { IGameCard } from './IGameCard'
import { CardScore } from '@views/components'
import { Game } from '@data/types'


export { GameCard }

function GameCard({ game, lazyLoad }: IGameCard) {
	const gameTags = game.tags.map(t => t.name).slice(0, 3).join(', ')

	return (
		<article className={style.GameCard} data-id={game.id}>
			<CardHeader game={game} lazyLoad={lazyLoad}/>
			<CardScore game={game}/>

			<p className={style.Tags}>
				tags: {gameTags}
			</p>

			<p className={style.Genres}>
				<span className="sr-only">Genre:</span>
				{game.genres[0]?.name ?? 'Not listed'}
			</p>
		</article>
	)
}

interface ICardHeader {
	game: Game
	lazyLoad?: boolean
}

function CardHeader({ game, lazyLoad }: ICardHeader) {
	return (
		<header>
			<figure>
				<img className={style.Banner}
					 src={game.backgroundImage
						  ?? '/gamecard_placeholder.svg'}
					 alt={`Promotional banner for the "${game.name}" game`}
					 loading={lazyLoad ? 'lazy' : 'eager'}
				/>
				<figcaption className={style.Name}>{game.name}</figcaption>
			</figure>
		</header>
	)
}
