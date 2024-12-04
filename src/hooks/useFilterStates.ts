import { useState } from 'react'
import { DataRequestParams } from '@data/request-parameters'
import { FilterStates } from '@data/types/FilterStates.ts'


export function useFilterStates(): FilterStates {
	const [filters, setFilters] = useState<DataRequestParams>({})
	const [order, setOrder]     = useState<'asc' | 'desc'>('asc')

	return {
		filters,
		setFilters,
		order,
		setOrder
	}
}