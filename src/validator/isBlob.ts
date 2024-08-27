import { getValueType } from '../func/getValueType'
import { ValueType } from '../constant/types'
/**
 * @description: 验证流
 * @param {any} value
 * @return {*}
 */
export const isBlob = (value: any) => {
  return getValueType(value) === ValueType.BLOB
}
