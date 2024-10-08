import { DataRequestParams } from '@data/requests'


export interface IDataService<T> {
	getAll(params: DataRequestParams): Promise<T[]>

	getById(id: number): Promise<T>
}