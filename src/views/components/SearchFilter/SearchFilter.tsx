import { ISearchFilter } from './ISearchFilter'
import style from './SearchFilter.module.scss'
import {
	FilterOrderSwitch, FilterSort, MetadataFilters
} from '@views/components'
import {
	SearchFilterViewModel
} from '@src/view-models/SearchFilterViewModel.ts'
import { useContext, useState } from 'react'
import { DataRequestParams } from '@data/request-parameters'
import { useSearchPage } from '@src/hooks/useSearchPage.ts'
import { RootContext } from '@data/context'


export { SearchFilter }

function SearchFilter(props: ISearchFilter) {
	const [filters, setFilters] = useState<DataRequestParams>({})

	useSearchPage(useContext(RootContext), filters)

	const viewModel = new SearchFilterViewModel(props)

	return (
		<menu className={style.SearchFilter}
			  onClick={(event) => viewModel.updateFilters(event, setFilters)}>
			<li>
				<FilterSort parentViewModel={viewModel}/>
			</li>

			<li>
				<FilterOrderSwitch/>
			</li>

			<MetadataFilters {...viewModel}/>
		</menu>
	)
}

