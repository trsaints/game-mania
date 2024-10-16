import { IGamePageList } from './IGamePageList.ts'
import style             from './GamePageList.module.scss'
import { GameCard }      from '@views/components'

export { GamePageList }

function GamePageList({ games }: IGamePageList) {
	return (
		<div className={style.GamePageList}>
			{games.map(game => (
				<GameCard game={game} key={`game-${game.id}`}/>))
			}
		</div>
	)
}