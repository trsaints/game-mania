import { GameContext } from '@data/context'
import { useContext }  from 'react'
import style           from './GamePage.module.scss'


function GamePage() {
	const {selectedGame} = useContext(GameContext)

	const gameGenres = selectedGame?.genres.map(
		(g) => (<li key={`${g.slug}-${g.id}`}>{g.name}</li>))

	const gamePlatforms = selectedGame?.platforms?.platforms.map(
		(p) => (<li key={`${p.slug}-${p.id}`}>{p.name}</li>))

	const gameTags = selectedGame?.tags.map(
		(t) => (<li key={`${t.slug}-${t.id}`}>{t.name}</li>))

	return (
		<article className={style.GamePage}>
			<header>
				<h2>{selectedGame?.name}</h2>
				<p>Released at: {selectedGame?.released}</p>

				<p>
					Genres:
					<ul>{gameGenres}</ul>
				</p>

				<p>Rating: {selectedGame?.rating}/{selectedGame?.ratingTop}</p>
			</header>

			<aside>
				<h2>Details</h2>
				<p>
					Categories:
					<ul>{gameTags}</ul>
				</p>

				<p>
					Platforms:
					<ul>{gamePlatforms}</ul>
				</p>
			</aside>

			<article>
				<h2>You might also like</h2>

				<ul>{gameTags}</ul>
			</article>
		</article>
	)
}

export { GamePage }