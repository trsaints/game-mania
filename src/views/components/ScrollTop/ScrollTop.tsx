import style from './ScrollTop.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


export { ScrollTop }

function ScrollTop() {
	return (
		<a className={style.ScrollTop} href="#">
			<span className="sr-only">back to top</span>
			<FontAwesomeIcon icon={faArrowUp}/>
		</a>
	)
}