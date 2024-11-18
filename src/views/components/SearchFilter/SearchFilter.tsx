import { ISearchFilter } from './ISearchFilter'
import style from './SearchFilter.module.scss'
import { MetadataFilters } from '@views/components'


function SearchFilter(props: ISearchFilter) {
	const ordering = [
		'name',
		'released',
		'added',
		'created',
		'updated',
		'rating',
		'metacritic'
	]

	const orderingOptions = ordering.map(o => {
		return (
			<option key={o}
					value={o}>
				{o}
			</option>
		)
	})

	const metadataList = new Map([
									 ['tags', props.tags],
									 ['genres', props.genres],
									 ['platforms', props.platforms],
									 ['publishers', props.publishers]
								 ])

	return (
		<menu className={style.SearchFilter}>
			<li>
				<p>
					<label htmlFor="ordering">order by</label>
					<select name="result_order" id="ordering">
						{orderingOptions}
					</select>
				</p>
			</li>

			<MetadataFilters metadataList={metadataList}/>
		</menu>
	)
}

export { SearchFilter }