import { IRootContext } from '@data/context'
import { Dispatch, SetStateAction, useState } from 'react'
import style from '@views/pages/SearchPage/SearchPage.module.scss'
import { SearchFilter } from '@views/components'


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

interface IControlsClose {
	isVisible: boolean
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

function ControlsClose({ isVisible, setIsVisible }: IControlsClose) {
	const textSwitch = isVisible ? 'hide' : 'show'

	return (
		<menu>
			<li>
				<button className={style.Switch}
						onClick={() => setIsVisible(! isVisible)}
						type="button">
								 <span className="sr-only">
									 {textSwitch} filters
								 </span>
				</button>
			</li>
		</menu>
	)
}