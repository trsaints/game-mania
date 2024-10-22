import { ApiData, ILocalDb } from '@data/local-storage'


export interface IStartupUtils {
	initializeDb(db: ILocalDb<ApiData>): void
}