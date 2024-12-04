import { useState } from 'react'
import style from '@views/pages/SearchPage/SearchPage.module.scss'
import { SearchFilter } from '@views/components'
import {
	ControlsClose
} from '@views/components/ControlsClose/ControlsClose.tsx'
import { ISearchFilter } from '@views/components/SearchFilter/ISearchFilter.ts'


export function SearchControls(props: ISearchFilter) {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const filterSelector = isVisible
						   ? `${style.SearchControls} ${style.filterVisible}`
						   : style.SearchControls

	return (
		<aside className={filterSelector}>
			<SearchFilter {...props} />

			<ControlsClose isVisible={isVisible} setIsVisible={setIsVisible}/>
		</aside>
	)
}

