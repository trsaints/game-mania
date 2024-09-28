import { Link } from 'react-router-dom'
import style    from './Header.module.scss'


function Header() {
	return (
		<header className={style.Header}>
			<h1>Game Mania</h1>

			<nav>
				<Link to="/">Home</Link>
				<Link to="/search">Search</Link>
			</nav>
		</header>
	)
}

export { Header }