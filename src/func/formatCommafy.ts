import { isEmpty } from '../validator/isEmpty'

/**
 * @description: 数字转千分位
 * @param {num|number}:num
 * @return {*}
 */
export const formatCommafy = (num: undefined | string | number): string => {
  if (isEmpty(num)) return ''
  num = '' + num
  if (/^.*\..*$/.test(num)) {
    const pointIndex = num.lastIndexOf('.')
    let intPart = num.substring(0, pointIndex)
    const pointPart = num.substring(pointIndex + 1, num.length)
    intPart = intPart + ''
    const re = /(-?\d+)(\d{3})/
    while (re.test(intPart)) {
      intPart = intPart.replace(re, '$1,$2')
    }
    num = intPart + '.' + pointPart
  } else {
    num = num + ''
    const re = /(-?\d+)(\d{3})/
    while (re.test(num)) {
      num = num.replace(re, '$1,$2')
    }
  }
  return num
}
