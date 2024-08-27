import { isObject } from './isObject'
interface IsEmptyObjectValue {
  [key: string]: any
}
/**
 * @description: 验证空对象
 * @param {IsEmptyObjectValue} value
 * @return {*}
 */
export const isEmptyObject = (value: any) => {
  if (!isObject(value)) {
    // console.error('value 必须是一个对象')
    return false
  }
  const temp = 0
  return Object.keys(value).length === temp
}
