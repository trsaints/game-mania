import { GameCommons, ShortScreenshot } from '@data/types'


export type Game = GameCommons & {
	shortScreenshots: ShortScreenshot[]
}
