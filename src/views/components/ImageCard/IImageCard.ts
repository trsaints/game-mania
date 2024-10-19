import { Image } from '@data/types/Image.ts'
import { ComponentProps } from 'react'


export interface IImageCard extends ComponentProps<'p'> {
	img: Image
	alt: string
}