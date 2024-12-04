import {
	ISearchFormViewModel
} from '@src/view-models/interfaces/ISearchFormViewModel.ts'
import { Game } from '@data/types'
import React, { Dispatch, SetStateAction } from 'react'
import { IApiMiddleware } from '@src/middlewares'
import { NavigateFunction } from 'react-router-dom'


export { SearchFormViewModel }

class SearchFormViewModel implements ISearchFormViewModel {
	search(e: React.FormEvent<HTMLFormElement>,
		   apiMiddleware: IApiMiddleware | undefined,
		   navigator: NavigateFunction,
		   setGames: Dispatch<SetStateAction<Game[]>>
	): void {
		e.preventDefault()

		const data      = new FormData(e.target as HTMLFormElement)
		const newSearch = data.get('search_content') as string

		if (! newSearch) return

		apiMiddleware?.getAll('games', { search: newSearch })
					 .then(apiData => setGames(apiData as Game[]))
		navigator('/search')

		setTimeout(() => window.location.assign('#search-header'), 200)
	}
}