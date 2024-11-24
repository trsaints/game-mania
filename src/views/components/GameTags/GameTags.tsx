import { IGameTags } from '@views/components/GameTags/IGameTags.ts'
import style from './GameTags.module.scss'


export function GameTags({ game, count }: IGameTags) {
	const gameGenres = game.genres
						   .slice(0, count)
						   .map(g =>
									<li className={style.GenreTag}
										key={`t-${g.id}`}
									>{g.name}</li>
						   )

	const gameTags = game.tags.slice(0, count)
						 .map(t =>
								  <li className={style.GenreTag}
									  key={`t-${t.id}`}
								  >{t.name}</li>
						 )

	return (
		<>
			<dl className={style.GameTags}>
				<dt>genres:</dt>
				<dd className={style.Meta}>
					<ul className={style.Tags}>
						{gameGenres}
					</ul>
				</dd>
			</dl>

			<dl className={style.GameTags}>
				<dt>tags:</dt>
				<dd className={style.Meta}>
					<ul className={style.Tags}>
						{gameTags}
					</ul>
				</dd>
			</dl>
		</>
	)
}