import style         from './GamePage.module.scss'
import { IGamePage } from './IGamePage.ts'


function GamePage(props: IGamePage) {
	return (
		<article className={style.GamePage}>
		</article>
	)
}

export { GamePage }