import { typeOf } from './typeOf'

export const isString = (value: unknown): value is string => typeOf(value) === 'string'
