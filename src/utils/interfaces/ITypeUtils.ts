import { Game } from '@data/types'
import { IParserUtils } from '@src/utils'


export interface ITypeUtils {
	mapToGame(data: never, parserUtils: IParserUtils): Game

	sortGames(games: Game[],
			  sortKey: keyof Game,
			  order: 'asc' | 'desc'): Game[]
}