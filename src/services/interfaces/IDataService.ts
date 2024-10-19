import { DataRequestParams } from '@data/request-parameters'


export interface IDataService<T> {
	getAll(params: DataRequestParams): Promise<T[]>

	getById(id: number): Promise<T>
}