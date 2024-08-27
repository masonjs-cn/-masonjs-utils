import { REGEXP_LETTER_NUMBER_ZH_UNDERLINE } from '../constant/regexp'
/**
 * @description: 验证字母、数字、汉字、下划线
 * @param {string} value
 * @return {*}
 */
export const isLetterNumberZhUnderline = (value: string) => {
  return REGEXP_LETTER_NUMBER_ZH_UNDERLINE.test(value)
}
