import { Dispatch, SetStateAction } from 'react'
import style from '@views/pages/SearchPage/SearchPage.module.scss'


interface IControlsClose {
	isVisible: boolean
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export function ControlsClose({ isVisible, setIsVisible }: IControlsClose) {
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