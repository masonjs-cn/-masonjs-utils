import { REGEXP_MOBILE } from '../constant/regexp'

/**
 * @description: 是否为手机
 * @return {*}
 */
export const isMobile = () => {
  return REGEXP_MOBILE.test(navigator.userAgent)
}
