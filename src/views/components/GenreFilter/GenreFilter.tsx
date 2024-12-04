import style from '@views/components/Selection/Selection.module.scss'
import { IGenreFilter } from '@views/components/GenreFilter/IGenreFilter.ts'


export function GenreFilter({ genres }: IGenreFilter) {
	const genreList = genres.map(g => {
		const key = `selection-${typeof (g)}-${g.id}`

		return (
			<li key={key} data-slug={g.slug}>
				<button className={style.Option}>{g.name}</button>
			</li>
		)
	})

	return (
		<menu className={style.GenreFilter}>
			{genreList}
		</menu>
	)
}