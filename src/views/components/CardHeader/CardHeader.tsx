import style from '@views/components/GameCard/GameCard.module.scss'
import { Game } from '@data/types'


interface ICardHeader {
	game: Game
	lazyLoad?: boolean
}

export function CardHeader({ game, lazyLoad }: ICardHeader) {
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