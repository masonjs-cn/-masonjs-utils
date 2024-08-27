import { REGEXP_PORT } from '../constant/regexp'

/**
 * @description: 验证ip
 * @param {number} value
 * @return {*}
 */
export const isPort = (value: number) => {
  return REGEXP_PORT.test(`${value}`)
}
