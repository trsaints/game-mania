import { ApiData } from '@data/local-storage'
import { DataRequestParams } from 'src/data/request-parameters'
import { LocalDbStore } from '@data/types'


export interface ILocalDb<T> {
	openObjectStore(storageName: string,
					mode: IDBTransactionMode
	): Promise<IDBObjectStore>

	create<T extends ApiData[]>(storages: { [K in keyof T]: LocalDbStore<T[K]> }): void

	getObjectById(storageName: string, key: number): Promise<T>

	getAll(storageName: string, params?: DataRequestParams): Promise<T[]>

	addObject(storageName: string, object: T): Promise<boolean>

	addBulk(storageName: string, objects: T[]): Promise<ApiData[]>

	removeObject(storageName: string, key: keyof T): Promise<boolean>

	updateObject(storageName: string,
				 key: keyof T,
				 newObject: T
	): Promise<boolean>

	isCreated(): boolean

	reset(): void
}