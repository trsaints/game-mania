import {
	GamePageListViewModel
} from '@src/view-models/GamePageListViewModel.ts'
import { Dispatch, SetStateAction } from 'react'


export interface ICustomPageSelection {
	parentViewModel: GamePageListViewModel
	setCurrentPage: Dispatch<SetStateAction<number>>
	pageIndices: number[]
}