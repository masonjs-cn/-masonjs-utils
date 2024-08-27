/**
 * @description: 防抖
 * @param {function} fn
 * @param {*} await
 * @return {*}
 */
export const debounce = (fn: (...args: any[]) => void, wait: number) => {
  let timer: any
  return function debounced(this: any, ...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
