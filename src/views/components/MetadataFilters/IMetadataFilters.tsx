import { Genre, Platform, Publisher, Tag } from '@data/types'


export interface IMetadataFilters {
	metadataList: Map<string, Tag[] | Genre[] | Platform[] | Publisher[]>
}