import { ISearchFilter } from './ISearchFilter'
import style from './SearchFilter.module.scss'
import { MetadataFilters } from '@views/components'
import {
	SearchFilterViewModel
} from '@src/view-models/SearchFilterViewModel.ts'


function SearchFilter(props: ISearchFilter) {
	const viewModel = new SearchFilterViewModel(props)

	const orderingOptions = viewModel.ordering.map(o => {
		return (
			<option key={o}
					value={o}>
				{o}
			</option>
		)
	})

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

			<MetadataFilters {...viewModel}/>
		</menu>
	)
}

export { SearchFilter }