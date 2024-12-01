import style from './Header.module.scss'
import { useState } from 'react'
import { HeaderViewModel } from '@src/view-models/HeaderViewModel.ts'
import { MainMenu } from '@views/components/Header/MainMenu.tsx'


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
					<MainMenu setIsMenuOpen={setIsMenuOpen}
							  parentViewModel={viewModel}/>
				</li>
			</menu>
		</header>
	)
}

export { Header }