import { REGEXP_PHONE } from '../constant/regexp'

/**
 * @description: 验证手机号码
 * @param {string} value
 * @return {*}
 */
export const isPhone = (value: string) => {
  return REGEXP_PHONE.test(value)
}
