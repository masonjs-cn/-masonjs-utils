import { REGEXP_LETTER_NUMBER } from '../constant/regexp'
/**
 * @description: 验证字母或数字
 * @param {string} value
 * @return {*}
 */
export const isLetterNumber = (value: string) => {
  return REGEXP_LETTER_NUMBER.test(value)
}
