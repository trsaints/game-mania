import { ImageCard } from '@views/components'
import { ComponentProps } from 'react'
import { ImageCommons } from '@data/types'


interface IScreenshotsList extends ComponentProps<'article'> {
	name: string
	images: ImageCommons[]
}

export function ScreenshotsList({ images, name }: IScreenshotsList) {
	return images.map((img, i) => {
		return (
			<li key={`${img.id}-${typeof (img)}`} data-index={i}>
				<ImageCard img={img}
						   alt={`screenshot number 
						   		${i + 1} of the "${name}" game`}
				/>
			</li>
		)
	})
}