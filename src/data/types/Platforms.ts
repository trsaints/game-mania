import { Platform } from '@data/types/Platform.ts'


export type Platforms = {
	platforms: Platform[]
	releasedAt: string
	requirements: {
		minimum: string
		recommended: string
	}
}