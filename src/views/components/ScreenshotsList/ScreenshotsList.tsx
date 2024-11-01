import { ImageCard } from '@views/components'
import {
	IScreenshotsList
} from '@views/components/ScreenshotsList/IScreenshotsList.ts'


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