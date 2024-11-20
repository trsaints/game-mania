import { ApiData, ILocalDb } from '@data/local-storage'
import { IApiService, IGameService } from '@src/services'
import { DbSchema } from '@data/types/DbSchema.ts'


export interface IStartupUtils {
	initializeDb(db: ILocalDb<ApiData>,
				 gameService: IGameService,
				 apiService: IApiService
	): Promise<boolean>

	getDbSchema(): DbSchema

	seedDb(isCreated: boolean,
		   db: ILocalDb<ApiData>,
		   gameService: IGameService,
		   apiService: IApiService
	): Promise<boolean>
}