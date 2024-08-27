export const getValueType = (value: any) => {
  return Object.prototype.toString.call(value)
}
