import {
	ISearchFilterViewModel
} from '@src/view-models/interfaces/ISearchFilterViewModel.ts'
import { FilterSortViewModel } from '@src/view-models/FilterSortViewModel.ts'
import { Dispatch, SetStateAction } from 'react'
import { DataRequestParams } from '@data/request-parameters'


interface IFilterSort {
	parentViewModel: ISearchFilterViewModel
	setFilters: Dispatch<SetStateAction<DataRequestParams>>
}

export function FilterSort({ parentViewModel, setFilters }: IFilterSort) {
	const viewModel = new FilterSortViewModel()

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
			<select name="result_order"
					id="ordering"
					onInput={(e) => viewModel.changeSortParameter(e,
																  setFilters)}
			>
				{orderingOptions}
			</select>
		</p>
	)
}