import style from './Header.module.scss'
import { MainMenu } from '@views/components/Header/MainMenu.tsx'


function Header() {
	return (
		<header className={style.Header}>
			<h1 className="sr-only">Game Mania</h1>

			<img className={style.Banner} src="/logo_solo.svg"
				 alt='Website logo, with the following slogan: "Game Mania: the next level awaits"'
			/>

			<menu className={style.Links}>
				<li>
					<MainMenu/>
				</li>
			</menu>
		</header>
	)
}

export { Header }