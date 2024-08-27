import { ValueType } from '../constant/types'
import { getValueType } from '../func/getValueType'

export const isFunc = (value: any) => {
  return getValueType(value) === ValueType.FUNCTION
}
