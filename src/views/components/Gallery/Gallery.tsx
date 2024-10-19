import { ImageCard } from '@views/components'
import { Link } from 'react-router-dom'
import style from './Gallery.module.scss'
import { IGallery } from './IGallery'


export { Gallery }

function Gallery({ screenshots }: IGallery) {
	const cards = screenshots.results.map(i => (
		<li key={`${i.id}-${typeof (i)}`}>
			<ImageCard img={i} alt={''}/>
		</li>)
	)

	return (
		<aside className={style.Gallery}>
			<ul className={style.Screenshots}>{cards}</ul>

			<Link to="/search">see all</Link>
		</aside>
	)
}

