export const isJSON = (str: any) => {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.error('error:' + str + '!!!' + e)
      return false
    }
  }
  return false
}
