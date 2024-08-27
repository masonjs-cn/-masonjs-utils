import { REGEXP_IP } from '../constant/regexp'
/**
 * @description: 验证ip
 * @param {any} value
 * @return {*}
 */
export const isIp = (value: any) => {
  return REGEXP_IP.test(value)
}
