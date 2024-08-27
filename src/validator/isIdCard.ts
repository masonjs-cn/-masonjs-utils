import { REGEXP_ID_CARD } from '../constant/regexp'
/**
 * @description: 是否为身份证
 * @param {string} value
 * @return {*}
 */
export const isIdCard = (value: string) => {
  return REGEXP_ID_CARD.test(value)
}
