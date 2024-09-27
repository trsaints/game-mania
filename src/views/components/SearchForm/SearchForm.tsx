import { Form }        from 'react-router-dom'
import { ISearchForm } from './ISearchForm'
import style           from './SearchForm.module.scss'


function SearchForm(props: ISearchForm) {
	return (
		<Form method="post" className={style.SearchForm}>
			<fieldset>
				<legend>Search</legend>

				<p>
					<label htmlFor="search">Search Term</label>
					<input type="search" id="search"/>
				</p>
			</fieldset>

			<button type="submit">Search</button>
		</Form>
	)
}

export { SearchForm }