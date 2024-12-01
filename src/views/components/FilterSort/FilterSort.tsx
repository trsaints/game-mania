import {
	ISearchFilterViewModel
} from '@src/view-models/interfaces/ISearchFilterViewModel.ts'


interface IFilterSort {
	parentViewModel: ISearchFilterViewModel
}

export function FilterSort({ parentViewModel }: IFilterSort) {
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