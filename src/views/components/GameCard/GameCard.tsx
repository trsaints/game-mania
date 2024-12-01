import style from './GameCard.module.scss'
import { IGameCard } from './IGameCard'
import { CardHeader, CardMeta, CardScore } from '@views/components'


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
