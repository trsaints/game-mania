import style from './LoadingScreen.module.scss'


export { LoadingScreen }

function LoadingScreen() {
	return (
        <aside className={style.LoadingScreen}>
            <h2>an amazing experience awaits you</h2>
            <p>just hold on a little bit</p>
        </aside>
    )
}