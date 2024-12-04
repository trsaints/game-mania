import { ComponentProps, FormEventHandler } from 'react'
import style from './CountFilter.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


interface ICountFilter extends ComponentProps<'form'> {
	onHandleSubmit: FormEventHandler
}

export function CountFilter({ onHandleSubmit }: ICountFilter) {
	return (
		<form className={style.CountFilter} onSubmit={onHandleSubmit}>
			<label htmlFor="item-count">Items per page:</label>
			<input type="search" name="item-count" id="item-count"/>
			<button className="primary" type="submit">
				save
				<FontAwesomeIcon icon={faArrowsRotate} className='icon--right' />
			</button>
		</form>
	)
}