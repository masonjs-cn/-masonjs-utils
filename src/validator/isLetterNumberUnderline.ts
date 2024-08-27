import { REGEXP_LETTER_NUMBER_UNDERLINE } from '../constant/regexp'
/**
 * @description: 验证字母、数字、下划线
 * @param {string} value
 * @return {*}
 */
export const isLetterNumberUnderline = (value: string) => {
  return REGEXP_LETTER_NUMBER_UNDERLINE.test(value)
}
