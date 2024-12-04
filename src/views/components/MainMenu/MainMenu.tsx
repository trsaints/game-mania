import { Link } from 'react-router-dom'
import { useState } from 'react'
import style from './MainMenu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowUpRightFromSquare, faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons'


export function MainMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const iconStyles = {
		transform: `rotate(${isMenuOpen ? '90deg' : '0'})`
	}

	const optionsStyles = {
		zIndex: isMenuOpen ? 10 : -1
	}

	return (
		<section className={style.MainMenu}
		>
			<button onClick={() => setIsMenuOpen(! isMenuOpen)}>
				{isMenuOpen ? 'close' : 'open'} menu
				<FontAwesomeIcon icon={faCircleChevronRight}
								 className="icon--right"
								 style={iconStyles}/>
			</button>

			<nav className={style.RouteOptions} style={optionsStyles}>
				<Link data-link="route" to="/">
					home
					<FontAwesomeIcon icon={faArrowUpRightFromSquare}
									 className="icon--right"/>
				</Link>

				<Link data-link="route" to="/search">
					search
					<FontAwesomeIcon icon={faArrowUpRightFromSquare}
									 className="icon--right"/>
				</Link>
			</nav>
		</section>
	)
}