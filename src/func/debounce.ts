/**
 * @description: 防抖
 * @param {function} fn - 要防抖的函数
 * @param {number} timeout - 延迟时间，默认为 200 毫秒
 * @param {boolean} immediate - 是否立即执行，默认为 false
 * @return {function} - 返回一个防抖的函数
 */
type FunctionArgs = any[] // 表示参数可以是任意类型的数组

export const debounce = <T extends FunctionArgs>(
  fn: (...args: T) => void,
  timeout = 200,
  immediate = false
): ((this: any, ...args: T) => void) => {
  // 指定 this 上下文类型
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: T) {
    // 指定 this 上下文类型
    const context = this

    const callNow = immediate && !timeoutId // 是否立即调用

    // 清除之前的定时器
    if (timeoutId) clearTimeout(timeoutId)

    // 设置新的定时器
    timeoutId = setTimeout(() => {
      timeoutId = null // 重置定时器
      if (!immediate) {
        fn.apply(context, args) // 非立即调用时执行
      }
    }, timeout)

    if (callNow) {
      fn.apply(context, args)
    }
  }
}
