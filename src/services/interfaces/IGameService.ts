import { Game, Screenshots } from '@data/types'
import { IDataService }      from '@services/interfaces'


export interface IGameService extends IDataService<Game> {
	getScreenshots(id: number): Promise<Screenshots>
}