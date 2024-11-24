import { Platform } from '@data/types'


export type GamesPlatform = {
	platform: Platform
	releasedAt: string
	requirements: Requirements
}

export type Requirements = {
	minimum: string
	recommended: string
}

