export const typeOf = (data: any) =>
  Object.prototype.toString
    .call(data)
    .replace(/\[\w+\s(\w+)\]/, '$1')
    .toLocaleLowerCase()
