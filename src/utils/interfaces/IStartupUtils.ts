import { ApiData, ILocalDb } from '@data/local-storage'
import { IGameService } from '@src/services'


export interface IStartupUtils {
	initializeDb(db: ILocalDb<ApiData>,
				 gameService: IGameService
	): Promise<boolean>
}