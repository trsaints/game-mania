import { Link } from 'react-router-dom'
import style    from './Header.module.scss'


function Header() {
	return (
		<header className={style.Header}>
			<h1>Game Mania</h1>

			<img className={style.Banner} src="/LOGO.svg"
				 alt='Website logo, with the following slogan: "Game Mania: the next level awaits"'
			/>

			<menu className={style.Links}>
				<li>
					<button className={style.MenuButton}>Show Menu</button>
				</li>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/search">Search</Link></li>
			</menu>
		</header>
	)
}

export { Header }