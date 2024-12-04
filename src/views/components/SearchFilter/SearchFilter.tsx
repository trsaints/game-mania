import { ISearchFilter } from './ISearchFilter'
import style from './SearchFilter.module.scss'
import {
	FilterOrderSwitch, FilterSort, MetadataFilters
} from '@views/components'
import {
	SearchFilterViewModel
} from '@src/view-models/SearchFilterViewModel.ts'


export { SearchFilter }

function SearchFilter(props: ISearchFilter) {
	const viewModel = new SearchFilterViewModel(props)

	const { filterStates } = props

	return (
		<menu className={style.SearchFilter}
			  onClick={(event) => viewModel.updateFilters(event, filterStates.setFilters)}>
			<li>
				<FilterSort parentViewModel={viewModel}
							setFilters={filterStates.setFilters}/>
			</li>

			<li>
				<FilterOrderSwitch setOrder={filterStates.setOrder}/>
			</li>

			<MetadataFilters {...viewModel}/>
		</menu>
	)
}

