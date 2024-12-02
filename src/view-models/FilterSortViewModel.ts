import {
	IFilterSortViewModel
} from '@src/view-models/interfaces/IFilterSortViewModel.ts'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Game } from '@data/types'


export { FilterSortViewModel }

class FilterSortViewModel implements IFilterSortViewModel {
	sortResults(e: ChangeEvent,
				setGames: Dispatch<SetStateAction<Game[] | undefined>>,
				order: 'asc' | 'desc'): void {
		const target = e.target as HTMLSelectElement

		if (! target) return

		const sortKey = target.value as keyof Game

		setGames(games => {
			if (! games) return []

			return games.sort((a, b) => {
				switch (sortKey) {
					case 'released': {
						const aDate = new Date(a.released)
						const bDate = new Date(b.released)

						if (order === 'asc') {
							return aDate.getTime() - bDate.getTime()
						}

						return bDate.getTime() - aDate.getTime()
					}

					case 'added': {
						if (order === 'asc') {
							return a.added - b.added
						}

						return b.added - a.added
					}

					case 'updated': {
						const aDate = new Date(a.updated)
						const bDate = new Date(b.updated)

						if (order === 'asc') {
							return aDate.getTime() - bDate.getTime()
						}

						return bDate.getTime() - aDate.getTime()
					}

					case 'metacritic': {
						if (order === 'asc') {
							return a.metacritic - b.metacritic
						}

						return b.metacritic - a.metacritic
					}
				}

				if (order === 'asc') {
					return a.name.localeCompare(b.name)
				}

				return b.name.localeCompare(a.name)
			})
		})
	}
}