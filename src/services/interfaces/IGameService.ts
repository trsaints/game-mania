import { Game, Screenshots } from '@data/types'
import { IApiService, IDataService } from '@services/interfaces'


export interface IGameService extends IDataService<Game> {
	getScreenshots(id: number, apiService: IApiService): Promise<Screenshots>
}