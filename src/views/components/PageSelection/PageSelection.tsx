import {
	IPageSelection
} from '@views/components/PageSelection/IPageSelection.ts'
import {
	PageSelectionViewModel
} from '@src/view-models/PageSelectionViewModel.ts'
import {
	CustomPageSelection
} from '@views/components/CustomPageSelection/CustomPageSelection.tsx'
import { PageSwitch } from '@views/components/PageSwitch/PageSwitch.tsx'


const viewModel = new PageSelectionViewModel()

export function PageSelection(props: IPageSelection) {
	const { gamesCount, itemCount } = props

	const pageIndices = viewModel.getPageIndices(gamesCount, itemCount)

	return (
		<aside>
			<h3>navigate by page</h3>

			<PageSwitch pageIndices={pageIndices} {...props} />
			<CustomPageSelection {...props} pageCount={pageIndices.length}/>
		</aside>
	)
}

