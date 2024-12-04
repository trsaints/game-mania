import style from './Footer.module.scss'
import {
	faArrowUpRightFromSquare, faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


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
				<summary>
					navigate by
					<FontAwesomeIcon icon={faCircleChevronRight}
									 className="icon--right"/>
				</summary>

				<nav>
					<Link to="/search">genres
						<FontAwesomeIcon icon={faArrowUpRightFromSquare}
										 className="icon--right"/>
					</Link>
					<Link to="/search">tags
						<FontAwesomeIcon icon={faArrowUpRightFromSquare}
										 className="icon--right"/>
					</Link>
					<Link to="/search">publishers
						<FontAwesomeIcon icon={faArrowUpRightFromSquare}
										 className="icon--right"/>
					</Link>
				</nav>
			</details>

			<img className={style.Banner} src="/LOGO.svg"
				 alt='Website logo, with the following slogan: "Game Mania: the next level awaits"'
			/>
		</footer>
	)
}

export { Footer }