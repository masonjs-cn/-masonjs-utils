import { getValueType } from '../func/getValueType'
import { ValueType } from '../constant/types'
/**
 * @description: 验证空字符串
 * @param {any} value
 * @return {*}
 */
export const isEmptyString = (value: any) => {
  const temp = 0
  return getValueType(value) === ValueType.STRING && value.length === temp
}
