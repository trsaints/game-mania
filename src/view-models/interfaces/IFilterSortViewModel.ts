import React, { Dispatch, SetStateAction } from 'react'
import { DataRequestParams } from '@data/request-parameters'


export interface IFilterSortViewModel {
	changeSortParameter(e: React.FormEvent<HTMLSelectElement>,
						setFilters: Dispatch<SetStateAction<DataRequestParams>>): void
}