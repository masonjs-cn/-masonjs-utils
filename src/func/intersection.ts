/**
 * @description: 计算多个数组的交集
 * @param {...Array<any>} arrays - 要计算交集的多个数组
 * @return {Array<any>} - 返回交集数组
 */
export const intersection = <T>(...arrays: Array<T[]>): T[] => {
  return arrays.reduce((acc, curr) => {
    return acc.filter((item) => curr.includes(item))
  })
}
