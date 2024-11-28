import style from './ScrollTop.module.scss'


export { ScrollTop }

function ScrollTop() {
	return (
		<a className={style.ScrollTop} href="#">
			<span className="sr-only">back to top</span>
		</a>
	)
}