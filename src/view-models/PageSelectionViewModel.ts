import {
	IPageSelectionViewModel
} from '@src/view-models/interfaces/IPageSelectionViewModel.ts'


export { PageSelectionViewModel }

class PageSelectionViewModel implements IPageSelectionViewModel {
	getPageIndices(gamesCount: number, itemCount: number): number[] {
		const isEqualCount = gamesCount % itemCount === 0
		return Array.from({
							  length: gamesCount > 1
									  ? isEqualCount
										? gamesCount
										: gamesCount + 1
									  : 1
						  },
						  (_, i) => i
		)
	}
}