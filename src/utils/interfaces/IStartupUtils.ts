import { LocalDb } from '@data/local-storage'

export interface IStartupUtils {
	initializeDb(db: LocalDb): void
}