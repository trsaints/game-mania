import { GameRequestParams } from '@data/requests'
import { Game, Screenshots } from '@data/types'
import { IDataService }      from '@services/interfaces'


export interface IGameService extends IDataService<Game> {
	getAll(params: GameRequestParams): Promise<Game[]>
	
	getScreenshots(id: number): Promise<Screenshots>
}