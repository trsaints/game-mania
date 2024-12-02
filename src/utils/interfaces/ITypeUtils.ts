import { Game } from '@data/types'
import { IParserUtils } from '@src/utils'
import { SortKey } from '@data/types/SortKey.ts'


export interface ITypeUtils {
	mapToGame(data: never, parserUtils: IParserUtils): Game

	sortGames(games: Game[],
			  order: 'asc' | 'desc',
			  sortKey?: SortKey): Game[]
}