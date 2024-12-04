import { IGameTags } from '@views/components/GameTags/IGameTags.ts'
import style from './GameTags.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTags } from '@fortawesome/free-solid-svg-icons'


export function GameTags({ game, count, baseAlignment }: IGameTags) {
	const gameGenres = game.genres
						   .slice(0, count)
						   .map(g => (
									<li className={style.GenreTag}
										key={`t-${g.id}`}
									>
										{g.name}
										<FontAwesomeIcon icon={faCircleInfo} className='icon--right'/>
									</li>
								)
						   )

	const gameTags = game.tags.slice(0, count)
						 .map(t => (
								  <li className={style.GenreTag}
									  key={`t-${t.id}`}
								  >
									  {t.name} <FontAwesomeIcon icon={faTags} className='icon--right'/>
								  </li>
							  )
						 )

	const alignmentStyles = {
		alignItems: baseAlignment
	}

	return (
		<>
			<dl className={style.GameTags} style={alignmentStyles}>
				<dt>genres:</dt>
				<dd className={style.Meta}>
					<ul className={style.Tags}>
						{gameGenres}
					</ul>
				</dd>
			</dl>

			<dl className={style.GameTags} style={alignmentStyles}>
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