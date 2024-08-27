import { isEmpty } from '../validator/isEmpty'
import { isNull } from '../validator/isNull'
import { isObject } from '../validator/isObject'
import { isUndefined } from '../validator/isUndefined'

/**
 * @description: 过滤null、undefined
 * @param {object} params
 * @return {*}
 */
export const filterNull = (params: { [x: string]: any }) => {
  if (isEmpty(params)) {
    return params
  }
  if (!isObject(params)) {
    return params
  }
  for (const item in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(item)) {
      const temp = params[item]
      if (isObject(temp)) {
        params[item] = filterNull(temp)
      }
      if (isNull(temp) || isUndefined(temp)) {
        delete params[item]
      }
    }
  }
  return params
}
