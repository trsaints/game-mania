import { useContext } from 'react'
import { RootContext } from '@data/context'
import { Form, useNavigate } from 'react-router-dom'
import style from '@views/components/SearchWidget/SearchWidget.module.scss'
import { SearchFormViewModel } from '@src/view-models/SearchFormViewModel.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const viewModel = new SearchFormViewModel()

export function SearchForm() {
	const { apiMiddleware, setGames } = useContext(RootContext)

	const navigator = useNavigate()

	return (
		<Form method="get"
			  className={style.SearchForm}
			  action="/search"
			  onSubmit={(e) => viewModel.search(e,
												apiMiddleware,
												navigator,
												setGames
			  )}
		>
			<label className={style.Label}
				   htmlFor="search_content"
			>Keyword</label>

			<input className={style.Search}
				   type="search"
				   id="search_content"
				   name="search_content"
			/>

			<button className={`primary ${style.Submit}`}
					type="submit"
			>
				Search
				<FontAwesomeIcon icon={faSearch} className='icon--right' />
			</button>
		</Form>
	)
}