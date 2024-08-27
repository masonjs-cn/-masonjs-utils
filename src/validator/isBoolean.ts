import { typeOf } from './typeOf'

export const isBoolean = (value: unknown): value is boolean => typeOf(value) === 'boolean'
