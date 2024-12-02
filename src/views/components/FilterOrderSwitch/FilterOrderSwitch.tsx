export function FilterOrderSwitch() {
	return (
		<fieldset>
			<legend>order</legend>

			<label htmlFor="sort-asc">ascending</label>
			<input type="radio"
				   name="order"
				   value="asc"
				   id="sort-asc"
				   defaultChecked/>

			<label htmlFor="sort-desc">descending</label>
			<input type="radio"
				   name="order"
				   value="desc"
				   id="sort-desc"/>
		</fieldset>
	)
}