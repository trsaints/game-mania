import { createContext } from 'react'
import { IRootContext }  from './IRootContext'


const RootContext = createContext<IRootContext>({
													clientSecret: ''
												})

export { RootContext }