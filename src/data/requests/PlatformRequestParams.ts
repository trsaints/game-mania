import { DataRequestParams } from '@data/requests'


export type PlatformRequestParams = DataRequestParams & {
	ordering?: string
}