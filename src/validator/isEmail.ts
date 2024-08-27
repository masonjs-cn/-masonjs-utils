import { REGEXP_EMAIL } from '../constant/regexp'
/**
 * @description: 验证邮箱
 * @param {string} value
 * @return {*}
 */
export const isEmail = (value: string) => {
  return REGEXP_EMAIL.test(value)
}
