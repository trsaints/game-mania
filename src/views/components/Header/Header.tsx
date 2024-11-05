import { Link } from 'react-router-dom'
import style from './Header.module.scss'
import { useState } from 'react'
import { HeaderViewModel } from '@src/view-models/HeaderViewModel.ts'


const viewModel = new HeaderViewModel()

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className={style.Header}>
			<h1 className="sr-only">Game Mania</h1>

			<img className={style.Banner} src="/logo_solo.svg"
				 alt='Website logo, with the following slogan: "Game Mania: the next level awaits"'
			/>

			<menu className={style.Links}>
				<li>
					<button className={style.MenuButton}
							onClick={() => viewModel.toggleMenu(isMenuOpen,
																setIsMenuOpen
							)}
							type="button">{viewModel.toggleButtonText(isMenuOpen)}
					</button>
				</li>

				<li>
					<dialog className={style.MainMenu}
							data-dialog="main-menu"
							onKeyDown={(e) => viewModel.closeOnEscape(e,
																	  setIsMenuOpen
							)}>
						<nav className={style.RouteOptions}
							 onClick={(e) => viewModel.closeOnClick(e,
																	setIsMenuOpen
							 )}
						>
							<Link data-link="route" to="/">home</Link>
							<Link data-link="route" to="/search">search</Link>
						</nav>
					</dialog>
				</li>
			</menu>
		</header>
	)
}

export { Header }