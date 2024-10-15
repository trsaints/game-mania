import { StoreIndex } from './StoreIndex'

export type LocalDbStore<T> = {
	name: string
	keyPath: keyof T
	autoIncrement?: boolean
	indices: StoreIndex<T>[]
}
