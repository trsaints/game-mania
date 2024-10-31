import * as React from 'react'
import { useState } from 'react'
import style from '@views/components/GamePanel/GamePanel.module.scss'
import { ScreenshotsList } from '@views/components'
import { IBanner } from '@views/components/PanelBanner/IBanner.ts'


export function PanelBanner(props: IBanner) {
	const { name, images } = props

	const [currentIndex, setCurrentIndex] = useState<number>(0)

	const selectImage = (e: React.MouseEvent<HTMLElement>) => {
		const target   = e.target as HTMLElement
		const listItem = target.closest('[data-index]') as HTMLLIElement

		if (! listItem) return

		const parsedIndex = listItem.dataset['index'] as unknown
		setCurrentIndex(parsedIndex as number)
	}

	return (
		<article className={style.Banner}>
			<figure className={style.Main}>
				<img
					src={images[currentIndex]?.image ?? ''}
					alt={`main banner for the "${name}" game`}
				/>
			</figure>

			<menu className={style.Screenshots} onClick={selectImage}>
				<ScreenshotsList {...props} />
			</menu>
		</article>
	)
}