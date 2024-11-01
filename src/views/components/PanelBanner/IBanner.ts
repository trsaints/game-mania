import { ComponentProps } from 'react'
import { ImageCommons } from '@data/types'


export interface IBanner extends ComponentProps<'article'> {
	name: string
	images: ImageCommons[]
}