import { ValueType } from '../constant/types'
import { getValueType } from '../func/getValueType'
import { isArray } from './isArray'
/**
 * @description: 空数组
 * @param {Array} value
 * @return {*}
 */
export const isEmptyArray = (value: Array<any>) => {
  if (!isArray(value)) {
    // console.error(`value 必须是一个数组`)
    return false
  }
  return getValueType(value) === ValueType.ARRAY && value.length === 0
}
