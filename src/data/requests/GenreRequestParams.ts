import { DataRequestParams } from '@data/requests'


export type GenreRequestParams = DataRequestParams & {
	ordering?: string
}