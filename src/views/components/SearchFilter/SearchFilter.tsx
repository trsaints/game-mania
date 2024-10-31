import { ISearchFilter } from './ISearchFilter'
import style from './SearchFilter.module.scss'
import { FilterOptions } from '@views/components'


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

	const orderingOptions = ordering.map(o =>
											 (<option key={o}
													  value={o}
											 >{o}</option>))

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

			<li>
				<details>
					<summary>publishers:</summary>

					<FilterOptions options={props.publishers}
								   typeName="publisher"
					/>
				</details>
			</li>

			<li>
				<details>
					<summary>tags:</summary>

					<FilterOptions options={props.tags} typeName="tag"/>
				</details>
			</li>

			<li>
				<details>
					<summary>genres:</summary>

					<FilterOptions options={props.genres} typeName="genre"/>
				</details>
			</li>
			<li>
				<details>
					<summary>platforms:</summary>

					<FilterOptions options={props.platforms}
								   typeName="platform"
					/>
				</details>
			</li>
		</menu>
	)
}

export { SearchFilter }