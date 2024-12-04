import { DataRequestParams } from '@data/request-parameters'
import { Dispatch, SetStateAction } from 'react'


export type FilterStates = {
	filters: DataRequestParams
	setFilters: Dispatch<SetStateAction<DataRequestParams>>
	order: 'asc' | 'desc'
	setOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
}