import React from 'react'
import { FilterOptions } from '@views/components'
import {
	IMetadataFilters
} from '@views/components/MetadataFilters/IMetadataFilters.ts'


export function MetadataFilters({ metadataList }: IMetadataFilters) {
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