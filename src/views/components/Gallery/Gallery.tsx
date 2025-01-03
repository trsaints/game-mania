import style from './Gallery.module.scss'
import { IGallery } from './IGallery'
import { PanelBanner } from '@views/components'
import { ImageCommons } from '@data/types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


export { Gallery }

function Gallery({ game }: IGallery) {
	const imagesToLoad = game.shortScreenshots
						 || game.screenshots?.results as ImageCommons[] || []

	return (
		<aside className={style.Gallery}>
			<h3>{game.name} - screenshots</h3>

			<PanelBanner name={game.name} images={imagesToLoad}/>

			<Link to={`search/${game.id}`}>
				visit "{game.name}" game page
				<FontAwesomeIcon icon={faArrowUpRightFromSquare}
								 className="icon--right"/>
			</Link>
		</aside>
	)
}

