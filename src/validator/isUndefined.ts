import { getValueType } from '../func/getValueType'
import { ValueType } from '../constant/types'
/**
 * @description: 验证undefine
 * @param {any} value
 * @return {*}
 */
export const isUndefined = (value: any) => {
  return getValueType(value) === ValueType.UNDEFINED
}
