import { IGameDetails } from './IGameDetails.ts'
import style from './GameDetails.module.scss'


export { GameDetails }

function GameDetails({ game }: IGameDetails) {
	const sentencePattern = /^(([^.]+\.\s){1,4})/gm

	const formattedDescription = game.descriptionRaw.split(sentencePattern)

	const formattedParagraphs = formattedDescription.map((sentence, index) => {
		return index === (formattedDescription.length - 1) || (index === 0)
			   ? <p>{sentence}</p>
			   : (
				   <>
					   <p>{sentence}</p>

					   <br/>
				   </>
			   )
	})

	return (
		<article className={style.GameDetails}>
			<h3>About</h3>

			<p className={style.Description}>{formattedParagraphs}</p>
		</article>
	)
}