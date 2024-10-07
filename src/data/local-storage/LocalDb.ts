import { ILocalDb } from '@data/local-storage/'
import {
	Game,
	Genre,
	LocalDbStore,
	Platform,
	Publisher,
	Tag
}                   from '@data/types'


export type ApiData = Game | Platform | Publisher | Genre | Tag

export class LocalDb
	implements ILocalDb<ApiData>
{
	private readonly _name: string
	private readonly _version: number
	private readonly _loadKey: string

	constructor(name: string, version: number) {
		this._name    = name
		this._version = version
		this._loadKey = `${this._name}_db_created`
	}

	openRequest() {
		return indexedDB.open(this._name, this._version)
	}

	openObjectStore(storageName: string,
					mode: IDBTransactionMode
	): Promise<IDBObjectStore> {
		return new Promise<IDBObjectStore>((resolve, reject) => {
			const openRequest = this.openRequest()

			openRequest.addEventListener('success', () => {
				const transaction = openRequest.result.transaction(storageName,
																   mode)
				resolve(transaction.objectStore(storageName))
			})

			openRequest.addEventListener('error',
										 () => reject(openRequest.error))
		})
	}

	create<T extends ApiData[]>(storages: { [K in keyof T]: LocalDbStore<T[K]> }): void {
		if (this.isCreated()) return

		const request = this.openRequest()

		request?.addEventListener('upgradeneeded', () => {
			const { result } = request

			storages.forEach(s => {
				const objectStore = result.createObjectStore(s.name, s)

				if (objectStore === undefined) return

				s.indices.forEach(i => objectStore.createIndex(i.index,
															   i.index,
															   i.options))
			})

			localStorage.setItem(this._loadKey, 'true')
		})
	}

	getObjectById(storageName: string, key: number): Promise<ApiData> {
		return new Promise<ApiData>(async (resolve, reject) => {
			const objectStore   = await this.openObjectStore(storageName,
															 'readonly')
			const idbGetRequest = objectStore.get(key)

			idbGetRequest.addEventListener('success',
										   () => resolve(idbGetRequest.result))
			idbGetRequest.addEventListener('error',
										   () => reject('operation failed'))
		})
	}

	getAll(storageName: string): Promise<ApiData[]> {
		return new Promise<ApiData[]>(async (resolve, reject) => {
			const objectStore   = await this.openObjectStore(storageName,
															 'readonly')
			const idbGetRequest = objectStore.getAll()

			idbGetRequest.addEventListener('success',
										   () => resolve(idbGetRequest.result))
			idbGetRequest.addEventListener('error',
										   () => reject('operation failed'))
		})
	}

	addObject(storageName: string, object: ApiData): Promise<boolean> {
		return new Promise<boolean>(async (resolve, reject) => {
			if (!this.isCreated() || !object) reject(false)

			const objectStore   = await this.openObjectStore(storageName,
															 'readwrite')
			const idbAddRequest = objectStore.add(object)

			idbAddRequest.addEventListener('success', () => resolve(true))
			idbAddRequest.addEventListener('error', () => resolve(false))
		})
	}

	removeObject(storageName: string, key: keyof ApiData): Promise<boolean> {
		return new Promise<boolean>(async (resolve, reject) => {
			if (!this.isCreated()) reject(false)

			const objectStore      = await this.openObjectStore(storageName,
																'readwrite')
			const idbDeleteRequest = objectStore.delete(key)

			idbDeleteRequest.addEventListener('success',
											  () => resolve(true))
			idbDeleteRequest.addEventListener('error', () => resolve(false))
		})
	}

	updateObject(storageName: string,
				 key: keyof ApiData,
				 newObject: ApiData
	): Promise<boolean> {
		return new Promise<boolean>(async (resolve, reject) => {
			if (!this.isCreated() || !newObject) reject(false)

			const objectStore   = await this.openObjectStore(storageName,
															 'readwrite')
			const idbPutRequest = objectStore.put(newObject, key)

			idbPutRequest.addEventListener('success', () => resolve(true))
			idbPutRequest.addEventListener('error', () => resolve(false))
		})
	}

	isCreated(): boolean {
		return localStorage.getItem(this._loadKey) !== null
	}

	reset(): void {
		indexedDB.deleteDatabase(this._name)
		localStorage.removeItem(this._loadKey)
	}

}

