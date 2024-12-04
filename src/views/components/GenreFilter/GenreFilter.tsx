import style from '@views/components/Selection/Selection.module.scss'
import { IGenreFilter } from '@views/components/GenreFilter/IGenreFilter.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export function GenreFilter({ genres }: IGenreFilter) {
	const genreList = genres.map(g => {
		const key = `selection-${typeof (g)}-${g.id}`

		return (
			<li key={key} data-slug={g.slug}>
				<button className={style.Option}>
					{g.name}
					<FontAwesomeIcon icon={faCircleInfo}
									 className="icon--right"/>
				</button>
			</li>
		)
	})

	return (
		<menu className={style.GenreFilter}>
			{genreList}
		</menu>
	)
}