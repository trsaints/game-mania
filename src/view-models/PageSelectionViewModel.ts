import {
	IPageSelectionViewModel
} from '@src/view-models/interfaces/IPageSelectionViewModel.ts'


export { PageSelectionViewModel }

class PageSelectionViewModel implements IPageSelectionViewModel {
	getPageIndices(gamesCount: number, itemCount: number): number[] {
		const pageCount    = gamesCount / itemCount
		const isEqualCount = gamesCount % itemCount === 0
		return Array.from({
							  length: pageCount > 1
									  ? isEqualCount
										? pageCount
										: pageCount + 1
									  : 1
						  },
						  (_, i) => i
		)
	}
}