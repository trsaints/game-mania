import {
	ISearchFilterViewModel
} from '@src/view-models/interfaces/ISearchFilterViewModel.ts'
import { Genre, Platform, Publisher, Tag } from '@data/types'
import { ISearchFilter } from '@views/components/SearchFilter/ISearchFilter.ts'
import React, { Dispatch, SetStateAction } from 'react'
import { DataRequestParams } from '@data/request-parameters'


export { SearchFilterViewModel }

class SearchFilterViewModel implements ISearchFilterViewModel {
	constructor(props: ISearchFilter) {
		this.ordering = [
			'name', 'released', 'added', 'created', 'updated', 'rating',
			'metacritic'
		]

		this.metadataList = new Map([
										['tags', props.tags],
										['genres', props.genres],
										['platforms', props.platforms],
										['publishers', props.publishers]
									])
	}

	public readonly ordering: string[]
	public readonly metadataList: Map<string, Tag[] | Genre[] | Platform[] | Publisher[]>

	updateFilters(event: React.MouseEvent<HTMLElement>,
				  setFilters: Dispatch<SetStateAction<DataRequestParams>>): void {
		const target           = event.target as HTMLElement
		const selectedMetadata = target.closest('[data-meta]') as HTMLElement
		const checkbox         = target.closest('[type="checkbox"]') as HTMLInputElement

		if (! selectedMetadata || ! selectedMetadata.dataset['meta']
			|| ! checkbox) return

		const [key, value] = selectedMetadata.dataset['meta'].split('-')

		setFilters((prevFilters) => {
			const newFilters = { ...prevFilters }
			const filterKey  = key as 'tags' | 'genres' | 'publishers' | 'platforms'

			if (checkbox.checked) {
				newFilters[filterKey]
					= newFilters[filterKey]?.concat(`,${value}`) || value
			} else {
				newFilters[filterKey] = newFilters[filterKey]
					?.split(',')
					.filter(metadata => metadata !== value)
					.join(',')
			}

			if (newFilters[filterKey] === '') delete newFilters[filterKey]

			return newFilters
		})
	}
}