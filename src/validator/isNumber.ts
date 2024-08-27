import { ValueType } from '../constant/types'
import { getValueType } from '../func/getValueType'

export const isNumber = (value: any) => {
  return getValueType(value) === ValueType.NUMBER
}
