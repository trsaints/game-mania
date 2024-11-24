import { IGameDetails } from './IGameDetails.ts'
import style from './GameDetails.module.scss'
import { GameTags } from '@views/components/GameTags/GameTags.tsx'


export { GameDetails }

function GameDetails({ game }: IGameDetails) {
	const sentencePattern = /^(([^.]+\.\s){1,4})/gm

	const formattedDescription = game.descriptionRaw.split(sentencePattern)

	const formattedParagraphs = formattedDescription.map((sentence, index) => {
		return (index === (formattedDescription.length - 1)) || (index === 0)
			   ? <p>{sentence}</p>
			   : (
				   <>
					   <p>{sentence}</p>

					   <br/>
				   </>
			   )
	})

	const pcPlatform = game.platforms.find(p => p.platform.name.toLowerCase()
												=== 'pc')
	return (
		<article className={style.GameDetails}>
			<h3>About</h3>

			<p className={style.Description}>
				<p>{formattedParagraphs}</p>

				<br/>

				<p className={style.Banners}>
					<img src={game.backgroundImage}
						 alt={`main banner for the "${game.name}" game`}/>


					<img src={game.backgroundImageAdditional}
						 alt={`additional banner for the "${game.name}" game`}/>
				</p>
			</p>

			<aside className={style.Details}>
				<h4>details</h4>

				<p className={style.Released}>
					release date: {new Date(game.released).toLocaleDateString()}
				</p>

				{pcPlatform && (
					<>
						<h4>system requirements</h4>

						<p className={style.Requirements}>
							<p>{pcPlatform.requirements.minimum} </p>

							<br/>

							<p>{pcPlatform.requirements.recommended}</p>
						</p>
					</>
				)}

				<GameTags game={game}/>
			</aside>
		</article>
	)
}