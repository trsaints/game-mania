import { Genre, Platform, Publisher, Tag } from '@data/types'
import { ISearchFilter }                   from './ISearchFilter'
import style                               from './SearchFilter.module.scss'


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

					<FilterOptions options={props.publishers} typeName='publisher'/>
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

interface IFilterOptions {
	options: Publisher[] | Genre[] | Tag[] | Platform[]
	typeName: string
}

function FilterOptions({ options, typeName }: IFilterOptions) {
	const optionsList = options.map(p => {
		return (
			<p className={style.SearchOption}>
				<input type="checkbox" id={p.name} name={p.name}/>
				<label htmlFor={p.name}>{p.name}</label>
			</p>
		)
	})

	return (
		<>
			{optionsList}

			<p>
				<label htmlFor={`search_${typeName}`}>{typeName}: </label>
				<input type="search"
					   id={`search_${typeName}`}
					   name={typeName}
				/>
			</p>
		</>
	)
}

export { SearchFilter }