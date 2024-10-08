import { LocalDb } from '@data/local-storage'
import {
	Game,
	Genre,
	LocalDbStore,
	Platform,
	Publisher,
	Tag
}                  from '@data/types'


export const StartupUtils = {
	initializeDb
}

function initializeDb(db: LocalDb) {
	const gameSchema: LocalDbStore<Game> = {
		name         : 'games',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const genreSchema: LocalDbStore<Genre> = {
		name         : 'genres',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const platformSchema: LocalDbStore<Platform> = {
		name         : 'platforms',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const tagSchema: LocalDbStore<Tag> = {
		name         : 'tags',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	const publisherSchema: LocalDbStore<Publisher> = {
		name         : 'publishers',
		keyPath      : 'id',
		autoIncrement: false,
		indices      : []
	}

	db.create([
				  gameSchema,
				  platformSchema,
				  genreSchema,
				  tagSchema,
				  publisherSchema
			  ])
}