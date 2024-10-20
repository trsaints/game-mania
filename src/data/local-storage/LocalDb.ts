import { ILocalDb } from '@data/local-storage/'
import { DataRequestParams } from 'src/data/request-parameters'
import {
	Game,
	Genre,
	LocalDbStore,
	Platform,
	Publisher,
	Tag
} from '@data/types'
import { LocalDbUtils } from '@src/utils'


export type ApiData = Game | Platform | Publisher | Genre | Tag

export class LocalDb implements ILocalDb<ApiData> {
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
																   mode
				)
				resolve(transaction.objectStore(storageName))
			})

			openRequest.addEventListener('error',
										 () => reject(openRequest.error)
			)
		})
	}

	create<T extends ApiData[]>(storages: { [K in keyof T]: LocalDbStore<T[K]> }): void {
		if (this.isCreated()) return

		const openRequest = this.openRequest()

		openRequest?.addEventListener('upgradeneeded', () => {
			const { result } = openRequest

			storages.forEach(s => {
				const objectStore = result.createObjectStore(s.name, s)

				if (objectStore === undefined) return

				s.indices.forEach(i => objectStore.createIndex(i.index,
															   i.index,
															   i.options
				))
			})

			localStorage.setItem(this._loadKey, 'true')
		})
	}

	getObjectById(storageName: string, key: number): Promise<ApiData> {
		return new Promise<ApiData>((resolve, reject) => {
			this.openObjectStore(storageName, 'readonly')
				.then(objectStore => {
					const idbGetRequest = objectStore.get(key)

					idbGetRequest.addEventListener('success',
												   () => resolve(idbGetRequest.result)
					)
					idbGetRequest.addEventListener('error',
												   () => reject(
													   'operation failed')
					)
				})
		})
	}

	getAll(storageName: string,
		   params?: DataRequestParams
	): Promise<ApiData[]> {
		return new Promise<ApiData[]>((resolve, reject) => {
			this.openObjectStore(storageName, 'readonly')
				.then(objectStore => {
					const idbCursorRequest = objectStore.openCursor()

					idbCursorRequest.addEventListener('error',
													  () => reject(
														  idbCursorRequest.error)
					)

					const results: ApiData[] = []

					idbCursorRequest.addEventListener('success', () => {
						LocalDbUtils.filterObjects(idbCursorRequest,
												   resolve,
												   results,
												   params
						)
					})
				})
		})
	}

	addObject(storageName: string, object: ApiData): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			if (! this.isCreated() || ! object) reject(false)

			this.openObjectStore(storageName, 'readwrite')
				.then(objectStore => {
					const idbAddRequest = objectStore.add(object)

					idbAddRequest.addEventListener('success',
												   () => resolve(true)
					)
					idbAddRequest.addEventListener('error',
												   () => reject(idbAddRequest.error)
					)
				})
		})
	}

	addBulk(storageName: string, objects: ApiData[]): Promise<ApiData[]> {
		return new Promise<ApiData[]>((resolve, reject) => {
			if (! this.isCreated() || objects.length < 1) reject(false)

			const addedObjects: ApiData[] = []

			this.openObjectStore(storageName, 'readwrite')
				.then(objectStore => {
					for (const object of objects) {
						const idbAddRequest = objectStore.add(object)

						idbAddRequest.addEventListener('success',
													   () => addedObjects.push(
														   object)
						)

						idbAddRequest.addEventListener('error',
													   () => console.log(`failed to add entry ${object.id}`)
						)
					}

					resolve(addedObjects)
				})
		})
	}

	removeObject(storageName: string, key: keyof ApiData): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			if (! this.isCreated()) reject(false)

			this.openObjectStore(storageName, 'readwrite')
				.then(objectStore => {
					const idbDeleteRequest = objectStore.delete(key)

					idbDeleteRequest.addEventListener('success',
													  () => resolve(true)
					)
					idbDeleteRequest.addEventListener('error',
													  () => reject(
														  idbDeleteRequest.error)
					)
				})
		})
	}

	updateObject(storageName: string,
				 key: keyof ApiData,
				 newObject: ApiData
	): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			if (! this.isCreated() || ! newObject) reject(false)

			this.openObjectStore(storageName, 'readwrite')
				.then(objectStore => {
					const idbPutRequest = objectStore.put(newObject, key)

					idbPutRequest.addEventListener('success',
												   () => resolve(true)
					)
					idbPutRequest.addEventListener('error',
												   () => reject(idbPutRequest.error)
					)
				})
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

