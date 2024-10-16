import { IGamePageList } from './IGamePageList.ts'
import style             from './GamePageList.module.scss'
import { GameCard }      from '@views/components'

export { GamePageList }

function GamePageList({ games }: IGamePageList) {
	return (
		<ul className={style.GameList}>
			{games.map(game => (
				<li key={`game-${game.id}`}>
					<GameCard game={game}/>
				</li>
			))
			}
		</ul>
	)
}