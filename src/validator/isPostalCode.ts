import { REGEXP_POSTAL_CODE } from '../constant/regexp'

/**
 * @description: 验证邮编
 * @param {string} value
 * @return {*}
 */
export const isPostalCode = (value: string) => {
  return REGEXP_POSTAL_CODE.test(value)
}
