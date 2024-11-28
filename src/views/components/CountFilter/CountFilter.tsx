import { ComponentProps, FormEventHandler } from 'react'
import style from './CountFilter.module.scss'


interface ICountFilter extends ComponentProps<'form'> {
	onHandleSubmit: FormEventHandler
}

export function CountFilter({ onHandleSubmit }: ICountFilter) {
	return (
		<form className={style.CountFilter} onSubmit={onHandleSubmit}>
			<label htmlFor="item-count">Items per page:</label>
			<input type="search" name="item-count" id="item-count"/>
			<button className="primary" type="submit">save</button>
		</form>
	)
}