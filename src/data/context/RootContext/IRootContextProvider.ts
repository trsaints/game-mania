import { PropsWithChildren } from 'react'
import { IApiMiddleware } from '@src/middlewares'


export interface IRootContextProvider extends PropsWithChildren {
	apiMiddleware: IApiMiddleware
}