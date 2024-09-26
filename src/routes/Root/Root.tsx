import { Link, Outlet } from 'react-router-dom'


function Root() {
	const currentDate = new Date();
	
	return (
		<>
			<header>
				<h1>Game Mania</h1>

				<nav>
					<Link to="/">Home</Link>
					<Link to="/search">Search</Link>
				</nav>
			</header>

			<Outlet/>

			<footer>
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
		</>
	)
}

export { Root }