import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { BigNumber, toBigNumber, toBigNumberOrNil } from '../src/type.js'

describe('BigNumber', () => {
  test('toBigNumber()', () => {
    const a = toBigNumber(123.45)
    assert.equal(a instanceof BigNumber, true)
    assert.equal(a.toFixed(), '123.45')
    assert.equal(toBigNumber(Infinity).eq(toBigNumber(Infinity)), true)
    assert.equal(toBigNumber(-Infinity).eq(toBigNumber(-Infinity)), true)
    assert.equal(toBigNumber(Infinity).eq(toBigNumber(-Infinity)), false)
    assert.equal(toBigNumber(-Infinity).eq(toBigNumber(Infinity)), false)
    assert.equal(toBigNumber(NaN).eq(toBigNumber(NaN)), false)
    assert.equal(toBigNumber(NaN).isNaN(), true)
    assert.equal(toBigNumber().isNaN(), true)
    assert.equal(toBigNumber().toString(), 'NaN')
    assert.equal(toBigNumber('foobar').isNaN(), true)
  })

  test('toBigNumberOrNil()', () => {
    assert.equal(toBigNumberOrNil(null), undefined)
    assert.equal(toBigNumberOrNil(undefined), undefined)
    assert.equal(toBigNumberOrNil(123.456)?.eq(123.456), true)
  })

  test("BigNumber.prototype[Symbol('nodejs.util.inspect.custom')]", () => {
    assert.equal(console.log(toBigNumber(0)), undefined)
  })

  test('BigNumber.prototype[Symbol.toPrimitive]', () => {
    assert.equal(+toBigNumber(0), 0)
    assert.equal('a' + toBigNumber(0), 'a0')
  })
})
