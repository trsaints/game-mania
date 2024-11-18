import { ISearchFilter } from './ISearchFilter'
import style from './SearchFilter.module.scss'
import { FilterOptions } from '@views/components'
import React from 'react'
import { Genre, Platform, Publisher, Tag } from '@data/types'


function SearchFilter(props: ISearchFilter) {
	const ordering = [
		'name',
		'released',
		'added',
		'created',
		'updated',
		'rating',
		'metacritic'
	]

	const orderingOptions = ordering.map(o => {
		return (
			<option key={o}
					value={o}>
				{o}
			</option>
		)
	})

	const metadataList = new Map([
									 ['tags', props.tags],
									 ['genres', props.genres],
									 ['platforms', props.platforms],
									 ['publishers', props.publishers]
								 ])

	return (
		<menu className={style.SearchFilter}>
			<li>
				<p>
					<label htmlFor="ordering">order by</label>
					<select name="result_order" id="ordering">
						{orderingOptions}
					</select>
				</p>
			</li>

			<MetadataFilters metadataList={metadataList}/>
		</menu>
	)
}

interface IMetadataFilters {
	metadataList: Map<string, Tag[] | Genre[] | Platform[] | Publisher[]>
}

function MetadataFilters({ metadataList }: IMetadataFilters) {
	const metadataFilters: React.ReactNode[] = []

	metadataList.forEach((metadata, key) => {
		metadataFilters.push(
			<li key={key}>
				<details>
					<summary>{key}:</summary>

					<FilterOptions options={metadata}
								   typeName={key}
					/>
				</details>
			</li>
		)
	})

	return metadataFilters
}

export { SearchFilter }