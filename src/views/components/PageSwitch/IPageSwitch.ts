import { Dispatch, SetStateAction } from 'react'


export interface IPageSwitch {
	pageIndices: number[]
	setCurrentPage: Dispatch<SetStateAction<number>>
}