import { DataRequestParams } from '@data/request-parameters'
import { IApiService } from '@src/services'


export interface IDataService<T> {
	getAll(params: DataRequestParams, apiService: IApiService): Promise<T[]>

	getById(id: number, apiService: IApiService): Promise<T>
}