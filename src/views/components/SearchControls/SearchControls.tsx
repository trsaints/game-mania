import { useState } from 'react'
import style from '@views/pages/SearchPage/SearchPage.module.scss'
import { SearchFilter } from '@views/components'
import {
	ControlsClose
} from '@views/components/ControlsClose/ControlsClose.tsx'
import { Genre, Platform, Publisher, Tag } from '@data/types'


export interface ISearchControls {
	genres?: Genre[]
	publishers?: Publisher[]
	platforms?: Platform[]
	tags?: Tag[]
}

export function SearchControls(props: ISearchControls) {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const filterSelector = isVisible
						   ? `${style.SearchControls} ${style.filterVisible}`
						   : style.SearchControls

	const { genres, publishers, platforms, tags } = props

	if (! genres || ! publishers || ! platforms || ! tags) return (<></>)

	return (
		<aside className={filterSelector}>
			<SearchFilter
				publishers={publishers}
				platforms={platforms}
				genres={genres}
				tags={tags}
			/>

			<ControlsClose isVisible={isVisible} setIsVisible={setIsVisible}/>
		</aside>
	)
}

