import style from '@views/components/GamePanel/GamePanel.module.scss'
import {
	IGameTags
} from '@views/components/GameGenreTags/IGameTags.ts'


export function GameTags({ game }: IGameTags) {
	const gameGenres = game.genres
						   .slice(0, 3)
						   .map(g =>
									<li className={style.GenreTag}
										key={`t-${g.id}`}
									>{g.name}</li>
						   )

	const gameTags = game.tags.slice(0, 3)
						 .map(t =>
								  <li className={style.GenreTag}
									  key={`t-${t.id}`}
								  >{t.name}</li>
						 )

	return (
		<>
			<dl>
				<dt className={style.TagsHeader}>genres:</dt>

				<dd>
					<ul className={style.Tags}>
						{gameGenres}
					</ul>
				</dd>
			</dl>

			<dl>
				<dt className={style.TagsHeader}>tags:</dt>

				<dd>
					<ul className={style.Tags}>
						{gameTags}
					</ul>
				</dd>
			</dl>
		</>
	)
}