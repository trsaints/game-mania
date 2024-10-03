import { Link } from 'react-router-dom'


function ErrorPage() {
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>

			<p>
				<Link to="/">Back to main page</Link>
			</p>
		</div>
	)
}

export { ErrorPage }