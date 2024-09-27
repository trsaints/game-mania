import { Dispatch, SetStateAction } from 'react'


export interface IRootContext {
	clientSecret: string
	setClientSecret: Dispatch<SetStateAction<string>>
}