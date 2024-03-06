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
expect(0n).toBeBigNumber()
expect(0).not.toBeBigNumber() // 0 is not of type BigNumber

expect(toBigNumber(0)).toEqualBigNumber(0)
expect(toBigNumber(0)).toEqualBigNumber('0')
expect(toBigNumber(0)).toEqualBigNumber(toBigNumber(0))
expect(toBigNumber(0)).not.toEqualBigNumber(1)
expect(0).not.toEqualBigNumber(0) // 0 is not of type BigNumber
expect(toBigNumber(Infinity)).toEqualBigNumber(Infinity)
expect(toBigNumber(-Infinity)).toEqualBigNumber(-Infinity)
expect(toBigNumber(NaN)).not.toEqualBigNumber(NaN) // NaN !== NaN

expect(toBigNumber()).toBeBigNumberNaN()
expect(toBigNumber(NaN)).toBeBigNumberNaN()
expect(toBigNumber('foobar')).toBeBigNumberNaN()
expect(0).not.toBeBigNumberNaN() // 0 is not of type BigNumber
```
