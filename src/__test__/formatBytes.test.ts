import { formatBytes } from '..'

describe('formatBytes', () => {
  it('0', () => {
    expect(formatBytes(0)).toEqual('0 Bytes')
  })

  it('1024', () => {
    expect(formatBytes(1024)).toEqual('1 KB')
  })

  it('123456789', () => {
    expect(formatBytes(123456789)).toEqual('117.74 MB')
  })
})
