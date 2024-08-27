import { isBlob } from '../validator/isBlob'
/**
 * @description: 导出、下载流文件
 * @param {Blob} value
 * @param {string} filename
 * @param {string} type
 * @return {*}
 */
export const downFile = (value: Blob, filename: string, type: string) => {
  if (!isBlob(value)) {
    console.error('值不是流!')
    return false
  }
  const blob = new Blob([value], {
    type: 'application/vnd.ms-excel;charset=utf-8'
  })
  let link: null | HTMLAnchorElement
  link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.setAttribute('download', `${filename}.${type}`)
  link.click()
  link = null
}
