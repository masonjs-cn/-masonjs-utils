import { REGEXP_URL } from '../constant/regexp'
/**
 * @description: 验证URL
 * @param {string} value
 * @return {*}
 */
export const isUrl = (value: string) => {
  return REGEXP_URL.test(value)
}
