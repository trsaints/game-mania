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
	private _request?: IDBRequest
	private _db?: IDBDatabase
	private readonly _loadKey: string

	constructor(name: string, version: number) {
		this._name    = name
		this._version = version
		this._loadKey = `${this._name}_db_created`
	}

	openStorage(): void {
		this._request = indexedDB.open(this._name, this._version)

		this._request?.addEventListener('success', () => {
			this._db = this._request?.result as IDBDatabase
		})

		this._request.addEventListener('error', () => {
			this._db = undefined
		})
	}

	create(storages: LocalDbStore<ApiData>[]): void {
		if (this.isCreated()) return

		this.openStorage()

		this._request?.addEventListener('upgradeneeded', () => {
			this._db = this._request?.result as IDBDatabase

			storages.forEach(s => {
				const objectStore = this._db?.createObjectStore(s.name, s)

				if (objectStore === undefined) return

				s.indices.forEach(i => objectStore.createIndex(i.index,
															   i.index,
															   i.options))
			})

			localStorage.setItem(this._loadKey, 'true')
		})
	}

	getObject(storageName: string, key: keyof ApiData): ApiData {
		const transaction = this._db?.transaction(storageName)

		if (transaction === undefined) return {} as ApiData

		const objectStore = transaction.objectStore(storageName)
		const getRequest  = objectStore.get(key)

		let result: ApiData = {} as ApiData

		getRequest.addEventListener('success', () => result = getRequest.result)

		return result
	}

	getAll(storageName: string): ApiData[] {
		const transaction = this._db?.transaction(storageName)

		if (transaction === undefined) return []

		const objectStore = transaction.objectStore(storageName)
		const getRequest  = objectStore.getAll()

		getRequest.addEventListener('success', () => [])

		return getRequest.result
	}

	addObject(storageName: string, object: ApiData): boolean {
		const transaction = this._db?.transaction(storageName, 'readwrite')

		if (transaction === undefined) return false

		const objectStore = transaction.objectStore(storageName)
		const addRequest  = objectStore.add(object)

		addRequest.addEventListener('error', () => false)

		return true
	}

	removeObject(storageName: string, key: keyof ApiData): boolean {
		const transaction = this._db?.transaction(storageName, 'readwrite')

		if (transaction === undefined) return false

		const objectStore   = transaction.objectStore(storageName)
		const deleteRequest = objectStore.delete(key)

		deleteRequest.addEventListener('error', () => false)

		return true
	}

	updateObject(storageName: string,
				 key: keyof ApiData,
				 newObject: ApiData
	): boolean {
		const transaction = this._db?.transaction(storageName, 'readwrite')

		if (transaction === undefined) return false

		const objectStore = transaction.objectStore(storageName)
		let request       = objectStore.get(key)

		request.addEventListener('success', () => {
			request = objectStore.put(newObject)

			request.addEventListener('error', () => false)
		})

		return true
	}

	isCreated(): boolean {
		return localStorage.getItem(this._loadKey) !== null
	}

	reset(): void {
		indexedDB.deleteDatabase(this._name)
		localStorage.removeItem(this._loadKey)
	}

}

