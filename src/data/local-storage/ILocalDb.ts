import { ApiData }      from '@data/local-storage/LocalDb.ts'
import { LocalDbStore } from '@data/types/LocalDbStore.ts'


export interface ILocalDb<T> {
	openStorage(): void

	create<T extends ApiData[]>(storages: { [K in keyof T]: LocalDbStore<T[K]> }): void

	getObjectById(storageName: string, key: number): T

	getAll(storageName: string): T[]

	addObject(storageName: string, object: T): boolean

	removeObject(storageName: string, key: keyof T): boolean

	updateObject(storageName: string, key: keyof T, newObject: T): boolean

	isCreated(): boolean

	reset(): void
}