export type StoreIndex<T> = {
	index: keyof T
	options: IDBIndexParameters
}