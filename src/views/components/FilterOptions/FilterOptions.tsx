import style from '@views/components/SearchFilter/SearchFilter.module.scss'
import {
	IFilterOptions
} from '@views/components/FilterOptions/IFilterOptions.ts'


export function FilterOptions({ options, typeName }: IFilterOptions) {
	const optionsList = options.map(p => {
		return (
			<p className={style.SearchOption} key={p.id}>
				<input type="checkbox" id={p.name} name={p.name}/>
				<label htmlFor={p.name}>{p.name}</label>
			</p>
		)
	})

	return (
		<>
			{optionsList}

			<p>
				<label htmlFor={`search_${typeName}`}>{typeName}: </label>
				<input type="search"
					   id={`search_${typeName}`}
					   name={typeName}
				/>
			</p>
		</>
	)
}