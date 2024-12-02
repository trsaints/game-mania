import {
	IFilterSortViewModel
} from '@src/view-models/interfaces/IFilterSortViewModel.ts'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Game } from '@data/types'


export { FilterSortViewModel }

class FilterSortViewModel implements IFilterSortViewModel {
	sortResults(e: ChangeEvent,
				setGames: Dispatch<SetStateAction<Game[] | undefined>>): void {
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

						return aDate.getTime() - bDate.getTime()
					}

					case 'added': {
						return a.added - b.added
					}

					case 'updated': {
						const aDate = new Date(a.updated)
						const bDate = new Date(b.updated)

						return aDate.getTime() - bDate.getTime()
					}

					case 'rating': {
						return a.rating - b.rating
					}

					case 'metacritic': {
						return a.metacritic - b.metacritic
					}
				}

				return a.name.localeCompare(b.name)
			})
		})
	}
}