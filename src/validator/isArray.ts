import { typeOf } from './typeOf'

export const isArray = (value: unknown): value is Array<any> => value !== null && typeOf(value) === 'array'
