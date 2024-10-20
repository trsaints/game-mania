import { Image } from '@data/types'
import { ComponentProps } from 'react'


export interface IImageCard extends ComponentProps<'p'> {
	img: Image
	alt: string
}