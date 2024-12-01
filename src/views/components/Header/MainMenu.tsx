import { Dispatch, SetStateAction } from 'react'
import style from '@views/components/Header/Header.module.scss'
import { Link } from 'react-router-dom'
import {
	IHeaderViewModel
} from '@src/view-models/interfaces/IHeaderViewModel.ts'


export interface IMainMenu {
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	parentViewModel: IHeaderViewModel
}

export function MainMenu({ setIsMenuOpen, parentViewModel }: IMainMenu) {
	return (
		<dialog className={style.MainMenu}
				data-dialog="main-menu"
				onKeyDown={(e) => {
					parentViewModel.closeOnEscape(e, setIsMenuOpen)
				}}>
			<h2 className="sr-only">main menu</h2>

			<menu>
				<li>
					<button className={style.CloseButton}
							type="button"
							onClick={() => {
								parentViewModel.closeOnClick(
									setIsMenuOpen)
							}}>
						<span className="sr-only">close menu</span>
						x
					</button>
				</li>
			</menu>

			<nav className={style.RouteOptions}
				 onClick={(e) => {
					 parentViewModel.closeOnRouteChange(e, setIsMenuOpen)
				 }}
			>
				<Link data-link="route" to="/">home</Link>
				<Link data-link="route" to="/search">search</Link>
			</nav>
		</dialog>
	)
}