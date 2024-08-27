/**
 * @description: 节流
 * @param {function} callback
 * @param {number} delay
 * @param {ThrottleOption} option
 * @return {*}
 */
export const throttle = (fn: (...args: any[]) => void, wait: number) => {
  let last = 0
  return function throttled(this: any, ...args: []) {
    const now = Date.now()
    // 超过约定时间，可以再次调用
    if (now - last >= wait) {
      fn.apply(this, args)
      last = Date.now()
    }
  }
}
