import { Game } from '@data/types'
import { GameDetails } from '@data/types/GameDetails.ts'
import { ApiService } from '@services/ApiService'
import { ParserUtils } from '@src/utils'

export const GameService = {
    getGames,
    getGameById
}

async function getGames(): Promise<Game[]> {
    const baseUrl = ApiService.createRouteUrl("games")
    const response = await ApiService.gameApi.get(baseUrl)
    
    return response.data?.results.map(mapToGameType<Game>) ?? []
}

async function getGameById(id: number): Promise<GameDetails> {
    const gameUrl = ApiService.createRouteUrl(`games/${id}`)
    const response = await ApiService.gameApi.get(gameUrl)
    
    return mapToGameType<GameDetails>(response.data)
}

function mapToGameType<T>(data: any): T {
    let mappedGame: any = {}
    const dataEntries = Object.entries(data)
    
    dataEntries.forEach(([key, value]) => {
        if (!key.includes('_')) {
            mappedGame[key] = value
            
            return
        } 
        
        const camelCasedKey = ParserUtils.convertSnakeToCamelCase(key)
        
        mappedGame[camelCasedKey] = value
    })
    
    return mappedGame as T
}

