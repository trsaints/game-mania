import { Dispatch, SetStateAction } from 'react'


export interface ICustomPageSelection {
	setCurrentPage: Dispatch<SetStateAction<number>>
	pageIndices: number[]
}