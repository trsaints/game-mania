import { ApiData } from '@data/local-storage'
import { LocalDbStore } from '@data/types'
import { DbSchema } from '@data/types/DbSchema.ts'


export interface ILocalDb<T> {
	openObjectStore(storageName: string,
					mode: IDBTransactionMode
	): Promise<IDBObjectStore>

	create(schema: DbSchema): Promise<boolean>

	createStores<T extends ApiData[]>(openRequest: IDBOpenDBRequest,
									  storages: { [K in keyof T]: LocalDbStore<T[K]> },
									  reject: (reason?: string) => void
	): void

	getObjectById(storageName: string, key: number): Promise<T>

	getAll(storageName: string): Promise<T[]>

	addObject(storageName: string, object: T): Promise<boolean>

	handleAddObject(objectStore: IDBObjectStore,
					object: ApiData,
					resolve: (value: (PromiseLike<boolean> | boolean)) => void,
					reject: (reason?: DOMException | null) => void
	): void

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