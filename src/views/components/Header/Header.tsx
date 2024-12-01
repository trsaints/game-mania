import style from './Header.module.scss'
import { MainMenu } from '@views/components/MainMenu/MainMenu.tsx'


function Header() {
	return (
		<header className={style.Header}>
			<h1 className="sr-only">Game Mania</h1>

			<img className={style.Banner} src="/logo_solo.svg"
				 alt='Website logo, with the following slogan: "Game Mania: the next level awaits"'
			/>

			<MainMenu/>
		</header>
	)
}

export { Header }