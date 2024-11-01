import style from '@views/components/GamePanel/GamePanel.module.scss'
import {
	IGameGenreTags
} from '@views/components/GameGenreTags/IGameGenreTags.ts'


export function GameGenreTags({ game }: IGameGenreTags) {
	const gameGenres = game.genres
						   .slice(0, 3)
						   .map(g =>
									<li className={style.GenreTag}
										key={`t-${g.id}`}
									>{g.name}</li>
						   )

	return <ul className={style.Tags}>{gameGenres}</ul>
}