import {
	ISearchFilterViewModel
} from '@src/view-models/interfaces/ISearchFilterViewModel.ts'
import { FilterSortViewModel } from '@src/view-models/FilterSortViewModel.ts'
import { useContext } from 'react'
import { RootContext } from '@data/context'


interface IFilterSort {
	parentViewModel: ISearchFilterViewModel
}

export function FilterSort({ parentViewModel }: IFilterSort) {
	const viewModel = new FilterSortViewModel()

	const { setGames } = useContext(RootContext)

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
					onChange={(e) => viewModel.sortResults(e, setGames)}>
				{orderingOptions}
			</select>
		</p>
	)
}