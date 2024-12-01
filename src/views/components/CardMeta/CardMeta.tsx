import { Game } from '@data/types'
import style from '@views/components/GameCard/GameCard.module.scss'


interface ICardMeta {
	game: Game
}

export function CardMeta({ game }: ICardMeta) {
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