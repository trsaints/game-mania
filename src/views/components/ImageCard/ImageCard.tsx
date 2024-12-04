import { IImageCard } from './IImageCard'
import style from './ImageCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


function ImageCard({ img, alt }: IImageCard) {
	return (
		<p className={style.ImageCard}>
			<button type="button">
				<FontAwesomeIcon icon={faEye}/>
				<span className="sr-only">click to see</span>
			</button>

			<img src={img?.image ?? ''}
				 alt={alt}
			/>
		</p>
	)
}

export { ImageCard }