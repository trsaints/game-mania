import style from './Footer.module.scss'


function Footer() {
	const currentDate = new Date()

	return (
		<footer className={style.Footer}>
			<header>Feito por {' '}
				<a href="https://github.com/trsaints"
				   target="_blank"
				   rel="noreferrer noopener"
				>@Trsaints</a> {' - '}

				<time dateTime={currentDate.getFullYear().toString()}>
					{currentDate.getFullYear()}
				</time>
			</header>

			<details className={style.Navigation}>
				<summary>navigate by</summary>

				<nav>
					<a href="#genres">genres</a>
					<a href="#tags">tags</a>
					<a href="#publishers">publishers</a>
				</nav>
			</details>

			<img className={style.Banner} src="/LOGO.svg"
				 alt='Website logo, with the following slogan: "Game Mania: the next level awaits"'
			/>
		</footer>
	)
}

export { Footer }