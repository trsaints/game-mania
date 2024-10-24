import { ImageCommons } from '@data/types'
import { ComponentProps } from 'react'


export interface IImageCard extends ComponentProps<'p'> {
	img: ImageCommons
	alt: string
}