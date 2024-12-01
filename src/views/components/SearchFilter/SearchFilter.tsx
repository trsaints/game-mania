import { ISearchFilter } from './ISearchFilter'
import style from './SearchFilter.module.scss'
import { MetadataFilters } from '@views/components'
import {
	SearchFilterViewModel
} from '@src/view-models/SearchFilterViewModel.ts'
import { useContext, useState } from 'react'
import { DataRequestParams } from '@data/request-parameters'
import { useSearchPage } from '@src/hooks/useSearchPage.ts'
import { RootContext } from '@data/context'
import {
	ISearchFilterViewModel
} from '@src/view-models/interfaces/ISearchFilterViewModel.ts'


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

			<MetadataFilters {...viewModel}/>
		</menu>
	)
}

interface IFilterSort {
	parentViewModel: ISearchFilterViewModel
}

function FilterSort({ parentViewModel }: IFilterSort) {
	const orderingOptions = parentViewModel.ordering.map(o => {
		return (
			<option key={o}
					value={o}>
				{o}
			</option>
		)
	})

	return (
		<p>
			<label htmlFor="ordering">order by</label>
			<select name="result_order" id="ordering">
				{orderingOptions}
			</select>
		</p>
	)
}