import { getValueType } from '../func/getValueType'
import { ValueType } from '../constant/types'
/**
 * @description: 验证Null
 * @param {any} value
 * @return {*}
 */
export const isNull = (value: any) => {
  return getValueType(value) === ValueType.NULL
}
