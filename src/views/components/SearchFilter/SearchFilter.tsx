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


function SearchFilter(props: ISearchFilter) {
	const [filters, setFilters] = useState<DataRequestParams>({})

	useSearchPage(useContext(RootContext), filters)

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
		<menu className={style.SearchFilter}
			  onClick={(event) => viewModel.updateFilters(event, setFilters)}>
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