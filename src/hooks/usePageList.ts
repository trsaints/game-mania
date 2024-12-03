import { useState } from 'react'


export function usePageList() {
	const [itemCount, setItemCount]     = useState(10)
	const [currentPage, setCurrentPage] = useState(0)

	return {
		itemCount,
		setItemCount,
		currentPage,
		setCurrentPage,
	}
}