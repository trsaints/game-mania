import {
	IGamePageListViewModel
} from '@src/view-models/interfaces/IGamePageListViewModel.ts'
import { Dispatch, SetStateAction } from 'react'


export interface IPageSwitch {
	pageIndices: number[]
	parentViewModel: IGamePageListViewModel
	setCurrentPage: Dispatch<SetStateAction<number>>
}