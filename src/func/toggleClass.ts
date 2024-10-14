/**
 * @description: 切换元素的 CSS 类名
 * @param {string} className - 要切换的类名
 * @param {boolean} add - 是否添加类名，默认为 true（添加）
 * @param {HTMLElement} element - 要操作的 DOM 元素，默认为 document.body
 */
export const toggleClass = (className: string, add: boolean, element?: HTMLElement): void => {
  if (!window) return // 检查是否在浏览器环境中

  const targetElement = element || document.body // 使用传入的元素，或默认使用 body
  const { className: currentClassName } = targetElement

  // 根据 add 参数决定是否添加或删除类名
  const updatedClassName = add
    ? `${currentClassName} ${className}`.trim() // 添加类名
    : currentClassName.replace(new RegExp(`\\s*\\b${className}\\b\\s*`, 'g'), '').trim() // 删除类名

  // 更新元素的类名
  targetElement.className = updatedClassName
}
