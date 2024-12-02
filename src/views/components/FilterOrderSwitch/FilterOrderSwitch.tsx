import style from './FilterOrderSwitch.module.scss'


export function FilterOrderSwitch() {
	return (
		<fieldset className={style.FilterOrderSwitch}>
			<legend>order:</legend>

			<p>
				<label htmlFor="sort-asc">ascending</label>
				<input type="radio"
					   name="order"
					   value="asc"
					   id="sort-asc"
					   defaultChecked/>
			</p>

			<p>
				<label htmlFor="sort-desc">descending</label>
				<input type="radio"
					   name="order"
					   value="desc"
					   id="sort-desc"/>
			</p>
		</fieldset>
	)
}