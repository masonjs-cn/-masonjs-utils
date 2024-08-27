type NumberType = number | string

/**
 * 将给定的数字更正为指定有效数字
 *
 * @param num The input number
 * @param precision An integer specifying the number of significant digits
 *
 * @example strip(0.09999999999999998) === 0.1 // true
 */
function strip(num: NumberType, precision = 15): number {
  return +parseFloat(Number(num).toPrecision(precision))
}

/**
 * 返回数字长度
 *
 * @param num The input number
 */
function digitLength(num: NumberType): number {
  // Get digit length of e
  const eSplit = num.toString().split(/[eE]/)
  const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0)
  return len > 0 ? len : 0
}

/**
 * 将给定数字转换为整数，支持科学记数法。
 * 如果是十进制，数字将按比例放大。
 *
 * @param num The input number
 */
function float2Fixed(num: NumberType): number {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''))
  }
  const dLen = digitLength(num)
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num)
}

/**
 * 如果给定的数字超出范围，则记录一个警告。
 *
 * @param num The input number
 */
function checkBoundary(num: number) {
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    console.warn(`${num} is beyond boundary when transfer to integer, the results may not be accurate`)
  }
}

/**
 * 来支持rest,拓展参数
 *
 * @param operation The original operation
 */
function createOperation(operation: (n1: NumberType, n2: NumberType) => number): (...nums: NumberType[]) => number {
  return (...nums: NumberType[]) => {
    const [first, ...others] = nums
    return others.reduce((prev, next) => operation(prev, next), first) as number
  }
}

/**
 * 准确的乘法。
 *
 * @param nums The numbers to multiply
 */
const times = createOperation((num1, num2) => {
  const num1Changed = float2Fixed(num1)
  const num2Changed = float2Fixed(num2)
  const baseNum = digitLength(num1) + digitLength(num2)
  const leftValue = num1Changed * num2Changed

  checkBoundary(leftValue)

  return leftValue / Math.pow(10, baseNum)
})

/**
 * 精准的加法
 *
 * @param nums The numbers to add
 */
const plus = createOperation((num1, num2) => {
  // 取最大的小数位
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)))
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum
})

/**
 * 精准的减法
 *
 * @param nums The numbers to subtract
 */
const minus = createOperation((num1, num2) => {
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)))
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum
})

/**
 * 精准的除法
 *
 * @param nums The numbers to divide
 */
const divide = createOperation((num1, num2) => {
  const num1Changed = float2Fixed(num1)
  const num2Changed = float2Fixed(num2)

  checkBoundary(num1Changed)
  checkBoundary(num2Changed)

  // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))))
})

/**
 * 精准的四舍五入
 *
 * @param num The number to round
 * @param decimal An integer specifying the decimal digits
 */
function round(num: NumberType, decimal: number): number {
  const base = Math.pow(10, decimal)
  let result = divide(Math.round(Math.abs(times(num, base))), base)

  if (num < 0 && result !== 0) {
    result = times(result, -1)
  }

  return result
}

export { strip, plus, minus, times, divide, round, digitLength, float2Fixed }
