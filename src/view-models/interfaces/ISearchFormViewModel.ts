import * as React from 'react'
import { Dispatch } from 'react'
import { IApiMiddleware } from '@src/middlewares'
import { NavigateFunction } from 'react-router-dom'
import { Game } from '@data/types'


export interface ISearchFormViewModel {
	search(e: React.FormEvent<HTMLFormElement>,
		   apiMiddleware: IApiMiddleware | undefined,
		   navigator: NavigateFunction,
		   setGames: Dispatch<React.SetStateAction<Game[] | undefined>>
	): void
}