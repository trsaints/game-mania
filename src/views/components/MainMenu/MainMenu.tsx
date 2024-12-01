import { Link } from 'react-router-dom'
import { useState } from 'react'
import style from './MainMenu.module.scss'


export function MainMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<details className={style.MainMenu}
				 onClick={() => setIsMenuOpen(! isMenuOpen)}
		>
			<summary>{isMenuOpen ? 'open' : 'close'} menu</summary>

			<nav className={style.RouteOptions}>
				<Link data-link="route" to="/">home</Link>
				<Link data-link="route" to="/search">search</Link>
			</nav>
		</details>
	)
}