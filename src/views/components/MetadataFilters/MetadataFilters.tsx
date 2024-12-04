import React from 'react'
import { FilterOptions } from '@views/components'
import {
	IMetadataFilters
} from '@views/components/MetadataFilters/IMetadataFilters.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'


export function MetadataFilters({ metadataList }: IMetadataFilters) {
	const metadataFilters: React.ReactNode[] = []

	metadataList.forEach((metadata, key) => {
		metadataFilters.push(
			<li key={key}>
				<details>
					<summary>
						{key}
						<FontAwesomeIcon icon={faCircleChevronRight}
										 className="icon--right"/>
					</summary>

					<FilterOptions options={metadata}
								   typeName={key}
					/>
				</details>
			</li>
		)
	})

	return metadataFilters
}