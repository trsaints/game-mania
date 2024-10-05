export type LocalDbStore<T> = {
	name: string
	keyPath: keyof T
	autoIncrement?: boolean
	indices: StoreIndex<T>[]
}

export type StoreIndex<T> = {
	index: keyof T
	options: IDBIndexParameters
}