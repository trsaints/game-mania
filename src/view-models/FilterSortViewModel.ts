import { DataRequestParams } from '@src/data/request-parameters'
import {
	IFilterSortViewModel
} from '@src/view-models/interfaces/IFilterSortViewModel.ts'
import React, { Dispatch, SetStateAction } from 'react'
import { SortKey } from '@data/types/SortKey.ts'


export { FilterSortViewModel }

class FilterSortViewModel implements IFilterSortViewModel {
	changeSortParameter(e: React.FormEvent<HTMLSelectElement>,
						setFilters: Dispatch<SetStateAction<DataRequestParams>>): void {
		const target = e.target as HTMLSelectElement

		if (! target) return

		const ordering = target.value as SortKey

		setFilters((prev) => ({
			...prev,
			ordering
		}))
	}
}