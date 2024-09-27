import style       from './Footer.module.scss'
import { IFooter } from './IFooter'


function Footer(props: IFooter) {
	const currentDate = new Date()

	return (
		<footer className={style.Footer}>
			<h2>Game Mania -
				<time dateTime={currentDate.getFullYear().toString()}>
					{currentDate.getFullYear()}
				</time>
			</h2>
			<p>Feito por
				<a href="https://github.com/trsaints"
				   target="_blank"
				   rel="noreferrer noopener"
				>Trsaints</a>
			</p>
		</footer>
	)
}

export { Footer }