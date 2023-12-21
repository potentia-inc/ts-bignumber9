import { toBigNumber, toBigNumberOrNil } from '../src/type.js'
import * as matchers from '../src/jest.js'

expect.extend(matchers)

describe('BigNumber', () => {
  test('toBigNumber()', () => {
    const a = toBigNumber(123.45)
    expect(a).toBeBigNumber()
    expect(a).toEqualBigNumber(a)
    expect(a).toEqualBigNumber(123.45)
    expect(a).toEqualBigNumber('123.45')
    expect(a).not.toEqualBigNumber(234.56)
    expect(a).not.toEqualBigNumber('234.56')
    expect(123.456).not.toEqualBigNumber(123.456)
    expect(toBigNumber(Infinity)).toEqualBigNumber(Infinity)
    expect(toBigNumber(-Infinity)).toEqualBigNumber(-Infinity)
    expect(toBigNumber(NaN)).not.toEqualBigNumber(NaN)
    expect(toBigNumber()).toBeBigNumberNaN()
    expect(toBigNumber(NaN)).toBeBigNumberNaN()
    expect(toBigNumber('foobar')).toBeBigNumberNaN()
    expect(0).not.toBeBigNumberNaN()
    expect(NaN).not.toBeBigNumberNaN()
  })

  test('toBigNumberOrNil()', () => {
    expect(toBigNumberOrNil(null)).toBeUndefined()
    expect(toBigNumberOrNil(undefined)).toBeUndefined()
    expect(toBigNumberOrNil(123.456)).toEqualBigNumber(123.456)
  })

  test("BigNumber.prototype[Symbol('nodejs.util.inspect.custom')]", () => {
    expect(console.log(toBigNumber(0))).toBeUndefined()
  })

  test('BigNumber.prototype[Symbol.toPrimitive]', () => {
    expect(+toBigNumber(0)).toBe(0)
    expect('a' + toBigNumber(0)).toBe('a0')
  })
})
