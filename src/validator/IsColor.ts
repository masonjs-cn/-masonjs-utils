import { REGEXP_COLOR } from '../constant/regexp'

/**
 * @description: 判断是否为16进制颜色，rgb或rgba
 * @param {string} value
 * @return {*}
 */
export const isColor = (value: string) => {
  return REGEXP_COLOR.test(value)
}
