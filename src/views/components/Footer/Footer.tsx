import style from './Footer.module.scss'


function Footer() {
	const currentDate = new Date()

	return (
		<footer className={style.Footer}>
			<p>Feito por {' '}
				<a href="https://github.com/trsaints"
				   target="_blank"
				   rel="noreferrer noopener"
				>@Trsaints</a> {' - '}

				<time dateTime={currentDate.getFullYear().toString()}>
					{currentDate.getFullYear()}
				</time>
			</p>

			<nav className={style.Navbar}>
				<a href="#genres">genres</a>
				<a href="#tags">tags</a>
				<a href="#publishers">publishers</a>
			</nav>

			<img className={style.Banner} src="/LOGO.svg"
				 alt='Website logo, with the following slogan: "Game Mania: the next level awaits"'
			/>
		</footer>
	)
}

export { Footer }