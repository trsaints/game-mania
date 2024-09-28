import { Game } from '@data/types'
import { ApiService } from '@services/ApiService'

export const GameService = {
    getGames,
    getGameById
}

async function getGames(): Promise<Game[]> {
    const mapToGameArray = (results: any[]) => 
        results.map((r: Game) => r as Game)

    const baseUrl = ApiService.createRouteUrl("games")
    const response = await ApiService.gameApi.get(baseUrl)
    
    return mapToGameArray(response.data?.results) ?? []
}

async function getGameById(id: number): Promise<Game> {
    const gameUrl = ApiService.createRouteUrl(`games/${id}`)
    const response = await ApiService.gameApi.get(gameUrl)
    
    return response.data as Game
}