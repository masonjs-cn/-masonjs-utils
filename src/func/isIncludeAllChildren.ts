/**
 * @description: 检查数组是否包含另一个数组的所有元素
 * @param {Array<any>} childArray - 要检查的子数组
 * @param {Array<any>} parentArray - 父数组
 * @return {boolean} - 如果父数组包含所有子数组的元素返回 true，否则返回 false
 */
export function isIncludeAllChildren(childArray: any[], parentArray: any[]): boolean {
  return childArray.every((child) => parentArray.includes(child))
}
