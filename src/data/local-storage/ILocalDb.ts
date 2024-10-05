import { LocalDbStore } from '@data/types/LocalDbStore.ts'


export interface ILocalDb<T> {
	openStorage(): void

	create(storages: LocalDbStore<T>[]): void

	getObject(storageName: string, key: keyof T): T

	getAll(storageName: string): T[]

	addObject(storageName: string, object: T): boolean

	removeObject(storageName: string, key: keyof T): boolean

	updateObject(storageName: string, key: keyof T, newObject: T): boolean

	isCreated(): boolean

	reset(): void
}