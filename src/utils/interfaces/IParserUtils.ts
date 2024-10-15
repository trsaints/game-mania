export interface IParserUtils {
	mapToCamelCase(data: any): unknown
	mapToSnakeCase(data: any): unknown
	toCamelCase(snakeText: string): string
	toSnakeCase(camelText: string): string
}