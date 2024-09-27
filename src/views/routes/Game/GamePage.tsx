import style         from './GamePage.module.scss'
import { IGamePage } from './IGamePage.ts'


function GamePage({game}: IGamePage) {
	const gameCompanies = game.involvedCompanies.map(
		(c, i) => (<li key={`${c}-${i}`}>{c}</li>))
	
	const gameGenres = game.genres.map(
		(g,i) => (<li key={`${g}-${i}`}>{g}</li>))

	const gamePlatforms = game.platforms.map(
		(p, i) =>  (<li key={`${p}-${i}`}>{p}</li>))
	
	const similarGames = game.similarGames.map(
		(g, i) => (<li key={`${g}-${i}`}>{g}</li>))

	return (
		<article className={style.GamePage}>
			<header>
				<h2>{game.name}</h2>
				<p>Released at: {game.firstReleaseDate}</p>

				<p>
					Genres:
					<ul>{gameGenres}</ul>
				</p>
				
				<p>
					Made by: 
					<ul>{gameCompanies}</ul>
				</p>
				
				<p>Rating: {game.totalRating}</p>
			</header>

			<p>{game.summary}</p>

			<aside>
				<h2>Details</h2>
				<p>Status {game.status}</p>
				<p>Category: {game.category}</p>
				
				<p>
					Platforms: 
					<ul>{gamePlatforms}</ul>
				</p>
			</aside>
			
			<article>
				<h2>You might also like</h2>
				
				<ul>{similarGames}</ul>
			</article>
		</article>
	)
}

export { GamePage }