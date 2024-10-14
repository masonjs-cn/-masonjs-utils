/**
 * @description: 检查元素是否具有指定的 CSS 类
 * @param {HTMLElement | null} element - 要检查的 DOM 元素
 * @param {string} className - 要检查的类名
 * @return {boolean} - 如果元素具有指定的类名返回 true，否则返回 false
 */
export const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!window) return false // 检查是否在浏览器环境中
  return element?.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`)) !== null
}
