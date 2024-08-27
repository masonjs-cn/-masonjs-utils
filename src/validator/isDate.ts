import { typeOf } from './typeOf'

export const isDate = (value: unknown): value is undefined => typeOf(value) === 'date'
