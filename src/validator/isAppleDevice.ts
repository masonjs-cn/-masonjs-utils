import { REGEXP_APPLE_DEVICE } from '../constant/regexp'

/**
 * @description: 是否为苹果设备
 * @return {*}
 */
export const isAppleDevice = () => {
  return REGEXP_APPLE_DEVICE.test(typeof navigator !== 'undefined' ? navigator.platform : '')
}
