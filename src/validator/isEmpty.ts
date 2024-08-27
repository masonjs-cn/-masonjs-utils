import { isNaN } from './isNaN'
import { isUndefined } from './isUndefined'
import { isNull } from './isNull'
import { isEmptyString } from './isEmptyString'
import { isEmptyArray } from './isEmptyArray'
import { isEmptyObject } from './isEmptyObject'
/**
 * @description: 验证为空(空字符串、空数组、空对象)
 * @param {any} value
 * @return {*}
 */
export const isEmpty = (value: any): boolean => {
  return (
    isNaN(value) ||
    isUndefined(value) ||
    isNull(value) ||
    isEmptyString(value) ||
    isEmptyArray(value) ||
    isEmptyObject(value)
  )
}
