import { Platform }       from '@data/types'
import { GameCommons }    from '@data/types/GameCommons.ts'
import { GameGenre }      from '@data/types/GameGenre.ts'
import { GameScreenshot } from '@data/types/GameScreenshot.ts'
import { GameStore }      from '@data/types/GameStore.ts'
import { GameTag }        from '@data/types/GameTag.ts'


export type Game = GameCommons & {
	reviewsCount: number
	parentPlatforms: ParentPlatforms
	genres: GameGenre[]
	dominantColor: string
	shortsScreenshots: GameScreenshot[]
	stores: GameStore[]
	tags: GameTag[]
}

type ParentPlatforms = {
	platforms: Platform[]
}



