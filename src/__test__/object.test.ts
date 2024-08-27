import { isEmpty } from '..'

describe('isEmpty: ', () => {
  it(`{} should return true`, () => {
    expect(isEmpty({})).toBeTruthy()
  })

  it(`{foo: 'bar'} should return false`, () => {
    expect(isEmpty({ foo: 'bar' })).toBeFalsy()
  })
})
