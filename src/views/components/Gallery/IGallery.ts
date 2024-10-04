import { Screenshots }    from '@data/types'
import { ComponentProps } from 'react'


export interface IGallery extends ComponentProps<'aside'> {
	screenshots: Screenshots
}