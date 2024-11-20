import {
	ISearchFilterViewModel
} from '@src/view-models/interfaces/ISearchFilterViewModel.ts'
import { Genre, Platform, Publisher, Tag } from '@data/types'
import { ISearchFilter } from '@views/components/SearchFilter/ISearchFilter.ts'


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
}