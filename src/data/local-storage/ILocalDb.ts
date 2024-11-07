import { ApiData } from '@data/local-storage'
import { LocalDbStore } from '@data/types'


export interface ILocalDb<T> {
	openObjectStore(storageName: string,
					mode: IDBTransactionMode
	): Promise<IDBObjectStore>

	create<T extends ApiData[]>(storages: { [K in keyof T]: LocalDbStore<T[K]> }): Promise<boolean>

	createStores<T extends ApiData[]>(openRequest: IDBOpenDBRequest,
									  storages: { [K in keyof T]: LocalDbStore<T[K]> },
									  reject: (reason?: string) => void
	): void

	getObjectById(storageName: string, key: number): Promise<T>

	getAll(storageName: string): Promise<T[]>

	addObject(storageName: string, object: T): Promise<boolean>

	addBulk(storageName: string, objects: T[]): Promise<ApiData[]>

	removeObject(storageName: string, key: number): Promise<boolean>

	updateObject(storageName: string,
				 newObject: T
	): Promise<boolean>

	isCreated(): boolean

	reset(): void

	rejectFailedEvent(event: Event,
					  reject: (reason?: DOMException | null) => void
	): void
}