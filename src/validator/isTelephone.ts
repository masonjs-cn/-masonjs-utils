import { REGEXP_TELEPHONE } from '../constant/regexp'
/**
 * @description: 验证座机
 * @param {string} value
 * @return {*}
 */
export const isTelephone = (value: string) => {
  return REGEXP_TELEPHONE.test(value)
}
