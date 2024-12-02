import style from './FilterOrderSwitch.module.scss'
import {
	FilterOrderSwitchViewModel
} from '@src/view-models/FilterOrderSwitchViewModel.ts'
import { Dispatch, SetStateAction } from 'react'


interface IFilterOrderSwitch {
	setOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
}

export function FilterOrderSwitch({ setOrder }: IFilterOrderSwitch) {
	const viewModel = new FilterOrderSwitchViewModel()

	return (
		<fieldset className={style.FilterOrderSwitch}
				  onClick={(e) => viewModel.switchFilterOrder(e, setOrder)}>
			<legend>order:</legend>

			<p>
				<label htmlFor="sort-asc">ascending</label>
				<input type="radio"
					   name="order"
					   value="asc"
					   id="sort-asc"
					   defaultChecked/>
			</p>

			<p>
				<label htmlFor="sort-desc">descending</label>
				<input type="radio"
					   name="order"
					   value="desc"
					   id="sort-desc"/>
			</p>
		</fieldset>
	)
}