import { toBigNumber, toBigNumberOrNil } from '../src/type.js'
import * as matchers from '../src/jest.js'

expect.extend(matchers)

describe('BigNumber', () => {
  test('toBigNumber()', () => {
    const a = toBigNumber(123.45)
    expect(a).toBeBigNumber()
    expect(a.toFixed()).toBeBigNumberString()
    expect(a.toString()).toBeBigNumberString()
    expect(a).not.toBeBigNumberString()
    expect(a).toEqualBigNumber(a)
    expect(a.toFixed()).toEqualBigNumberString(a)
    expect(a.toString()).toEqualBigNumberString(a)
    expect(a).toEqualBigNumber(123.45)
    expect(a).toEqualBigNumber('123.45')
    expect(a).not.toEqualBigNumber(234.56)
    expect(a).not.toEqualBigNumber('234.56')
    expect(0n).not.toBeBigNumber()
    expect(123.456).not.toEqualBigNumber(123.456)
    expect(123.456).not.toEqualBigNumberString(123.456)
    expect(toBigNumber(Infinity)).toEqualBigNumber(Infinity)
    expect('Infinity').toEqualBigNumberString(Infinity)
    expect(toBigNumber(-Infinity)).toEqualBigNumber(-Infinity)
    expect('-Infinity').toEqualBigNumberString(-Infinity)
    expect(toBigNumber(NaN)).not.toEqualBigNumber(NaN)
    expect('NaN').not.toEqualBigNumberString(NaN)
    expect(toBigNumber()).toBeBigNumberNaN()
    expect(toBigNumber(NaN)).toBeBigNumberNaN()
    expect(toBigNumber('foobar')).toBeBigNumberNaN()
    expect('NaN').toBeBigNumberNaNString()
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

  test('readme examples', () => {
    expect(toBigNumber(0)).toBeBigNumber()
    expect(0n).not.toBeBigNumber() // 0n is not of type BigNumber
    expect(0).not.toBeBigNumber() // 0 is not of type BigNumber

    expect('0').toBeBigNumberString()
    expect('123.456').toBeBigNumberString()
    expect('Infinity').toBeBigNumberString()
    expect(0).not.toBeBigNumberString() // 0 is not of type string
    expect(0n).not.toBeBigNumberString() // 0n is not of type string

    expect(toBigNumber(0)).toEqualBigNumber(0)
    expect(toBigNumber(0)).toEqualBigNumber('0')
    expect(toBigNumber(0)).toEqualBigNumber(toBigNumber(0))
    expect(toBigNumber(0)).not.toEqualBigNumber(1)
    expect(0).not.toEqualBigNumber(0) // 0 is not of type BigNumber
    expect(toBigNumber(Infinity)).toEqualBigNumber(Infinity)
    expect(toBigNumber(-Infinity)).toEqualBigNumber(-Infinity)
    expect(toBigNumber(NaN)).not.toEqualBigNumber(NaN) // NaN !== NaN

    expect('0').toEqualBigNumberString(0)
    expect('123.456').toEqualBigNumberString(123.456)
    expect('Infinity').toEqualBigNumberString(Infinity)
    expect(0).not.toEqualBigNumberString(0) // 0 is not of type string
    expect(0n).not.toEqualBigNumberString(0) // 0n is not of type string

    expect(toBigNumber()).toBeBigNumberNaN()
    expect(toBigNumber(NaN)).toBeBigNumberNaN()
    expect(toBigNumber('foobar')).toBeBigNumberNaN()
    expect(0).not.toBeBigNumberNaN() // 0 is not of type BigNumber

    expect('NaN').toBeBigNumberNaNString()
    expect('foobar').not.toBeBigNumberNaNString()
    expect(0).not.toBeBigNumberNaNString() // 0 is not of type string
  })
})
