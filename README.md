# @potentia/bignumber9

utilities for [bignumber.js](https://github.com/MikeMcl/bignumber.js) `^9.0.0`

## API

```typescript
import { toBigNumber, toBigNumberOrNil } from '@potentia/bignumber'
// or import { toBigNumber, toBigNumberOrNil } from '@potentia/bignumber/type'

toBigNumber(0) // BigNumber(0)
toBigNumber('0') // BigNumber(0)
toBigNumber(1.234) // BigNumber(1.234)
toBigNumber('1.234') // BigNumber(1.234)
toBigNumber() // BigNumber(NaN)
toBigNumber(NaN) // BigNumber(NaN)
toBigNumber('foobar') // BigNumber(NaN)
toBigNumber(Infinity) // BigNumber(Infinity)
toBigNumber(-Infinity) // BigNumber(-Infinity)
toBigNumberOrNil() // undefined

// jest test file
import * as matchers from '@potentia/bignumber/jest'
expect.extend(matchers)

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
```
