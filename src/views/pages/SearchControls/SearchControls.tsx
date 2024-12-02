import { IRootContext } from '@data/context'
import { useState } from 'react'
import style from '@views/pages/SearchPage/SearchPage.module.scss'
import { SearchFilter } from '@views/components'
import { ControlsClose } from '@views/pages/ControlsClose/ControlsClose.tsx'


interface ISearchControls {
	context: IRootContext
}

export function SearchControls({ context }: ISearchControls) {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const filterSelector = isVisible
						   ? `${style.SearchControls} ${style.filterVisible}`
						   : style.SearchControls


	const { genres, publishers, platforms, tags } = context

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

