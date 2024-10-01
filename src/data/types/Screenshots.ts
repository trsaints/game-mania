export type Screenshots = {
	count: number
	next?: string
	previous?: string
	results: Image[]
}

type Image = {
	id: number
	image: string
	hidden: boolean
	width: number
	height: number
}