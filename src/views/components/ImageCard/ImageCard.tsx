import { IImageCard } from './IImageCard'
import style          from './ImageCard.module.scss'


function ImageCard({ img, alt }: IImageCard) {
	return (
        <p className={style.ImageCard}>
            <button type='button'>click to see</button>

            <img src={img?.image ?? ''}
                 alt={alt}
            />
        </p>
    )
}

export { ImageCard }