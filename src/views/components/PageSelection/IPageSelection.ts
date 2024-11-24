import { ComponentProps, Dispatch, SetStateAction } from 'react'
import {
	IGamePageListViewModel
} from '@src/view-models/interfaces/IGamePageListViewModel.ts'


export interface IPageSelection extends ComponentProps<'menu'> {
	gamesCount: number
	itemCount: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	parentViewModel: IGamePageListViewModel
}