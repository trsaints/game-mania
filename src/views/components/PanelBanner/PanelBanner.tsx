import { useState } from 'react'
import style from './PanelBanner.module.scss'
import { ScreenshotsList } from '@views/components'
import { IBanner } from '@views/components/PanelBanner/IBanner.ts'
import { PanelBannerViewModel } from '@src/view-models/PanelBannerViewModel.ts'


const viewModel = new PanelBannerViewModel()

export function PanelBanner(props: IBanner) {
	const { name, images } = props

	const [currentIndex, setCurrentIndex] = useState<number>(0)

	return (
		<article className={style.PanelBanner} data-banner="container">
			<figure className={style.Main} data-banner="main">
				<img
					src={images[currentIndex]?.image ?? ''}
					alt={`main banner for the "${name}" game`}
				/>
			</figure>

			<menu className={style.Screenshots}
				  onClick={(e) => viewModel.selectImage(e, setCurrentIndex)}>
				<ScreenshotsList {...props} />
			</menu>
		</article>
	)
}