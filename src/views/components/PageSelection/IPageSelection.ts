import { ComponentProps, Dispatch, SetStateAction } from 'react'
import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'


export interface IPageSelection extends ComponentProps<'menu'> {
	gamesCount: number
	itemCount: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	viewModel: GamePageListViewModel
}