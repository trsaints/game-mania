import { LocalDbStore } from '@data/types/LocalDbStore.ts'
import { Game } from '@data/types/Game.ts'
import { Platform } from '@data/types/Platform.ts'
import { Genre } from '@data/types/Genre.ts'
import { Tag } from '@data/types/Tag.ts'
import { Publisher } from '@data/types/Publisher.ts'


export type DbSchema = [
	LocalDbStore<Game>,
	LocalDbStore<Platform>,
	LocalDbStore<Genre>,
	LocalDbStore<Tag>,
	LocalDbStore<Publisher>
]