import { useState } from 'react'
import style from '@views/components/GamePanel/GamePanel.module.scss'
import { ScreenshotsList } from '@views/components'
import { IBanner } from '@views/components/PanelBanner/IBanner.ts'
import { PanelBannerViewModel } from '@src/view-models/PanelBannerViewModel.ts'


const viewModel = new PanelBannerViewModel()

export function PanelBanner(props: IBanner) {
	const { name, images } = props

	const [currentIndex, setCurrentIndex] = useState<number>(0)

	return (
		<article className={style.Banner}>
			<figure className={style.Main}>
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