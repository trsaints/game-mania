import { GameRequestParams }              from '@data/requests'
import { Game, Recommended, Screenshots } from '@data/types'
import { IDataService }                   from '@services/interfaces'


export interface IGameService extends IDataService<Game> {
	getAll(params: GameRequestParams): Promise<Game[]>

	getRecommendations(): Promise<Recommended>

	getScreenshots(id: number): Promise<Screenshots>
}