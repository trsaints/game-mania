import { ApiData, ILocalDb } from '@data/local-storage'
import { IGameService } from '@src/services'
import { DbSchema } from '@data/types/DbSchema.ts'


export interface IStartupUtils {
	initializeDb(db: ILocalDb<ApiData>,
				 gameService: IGameService
	): Promise<boolean>

	getDbSchema(): DbSchema

	seedDb(isCreated: boolean,
		   db: ILocalDb<ApiData>,
		   gameService: IGameService
	): Promise<boolean>
}