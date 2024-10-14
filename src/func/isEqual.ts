/**
 * @description: 深度比较两个对象的相等性
 * @param {Object} objA - 第一个对象
 * @param {Object} objB - 第二个对象
 * @return {boolean} - 相等返回 true，不相等返回 false
 */
function isEqualObject(objA: Record<string, any>, objB: Record<string, any>): boolean {
  if (objA === objB) return true // 引用相同
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA == null || objB == null) return false

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  // 处理键长度不相同的情况
  if (keysA.length !== keysB.length) return false

  // 深度比较每个键的值
  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqual(objA[key], objB[key])) return false
  }

  return true
}

/**
 * @description: 深度比较两个数组的相等性
 * @param {Array<any>} arrayA - 第一个数组
 * @param {Array<any>} arrayB - 第二个数组
 * @return {boolean} - 相等返回 true，不相等返回 false
 */
function isEqualArray(arrayA: any[], arrayB: any[]): boolean {
  if (!arrayA || !arrayB) return false // 检查空数组
  if (arrayA.length !== arrayB.length) return false // 长度不相同

  // 深度比较数组元素
  for (let i = 0; i < arrayA.length; i++) {
    if (!isEqual(arrayA[i], arrayB[i])) return false // 元素不相等
  }

  return true
}

/**
 * @description: 深度比较任意两个值的相等性
 * @param {*} valueA - 第一个值
 * @param {*} valueB - 第二个值
 * @return {boolean} - 相等返回 true，不相等返回 false
 */
function isEqual(valueA: any, valueB: any): boolean {
  const typeA = Object.prototype.toString.call(valueA)
  const typeB = Object.prototype.toString.call(valueB)

  if (typeA !== typeB) return false // 类型不相同

  // 针对不同类型的深度比较
  if (typeA === '[object Object]') {
    return isEqualObject(valueA, valueB) // 对象比较
  }
  if (typeA === '[object Array]') {
    return isEqualArray(valueA, valueB) // 数组比较
  }
  if (typeA === '[object Function]') {
    return valueA === valueB || valueA.toString() === valueB.toString() // 函数比较
  }

  return valueA === valueB // 基本数据类型比较
}

export { isEqualObject, isEqualArray, isEqual }
