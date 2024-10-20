export interface IParserUtils {
	mapToCamelCase(data: never): unknown

	mapToSnakeCase(data: never): unknown

	toCamelCase(snakeText: string): string

	toSnakeCase(camelText: string): string
}