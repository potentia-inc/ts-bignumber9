/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { BigNumber, toBigNumber } from './type.js'
import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils'

interface CustomMatchers<R = unknown> {
  toBeBigNumber: (this: unknown) => R
  toEqualBigNumber: (this: unknown, expected: unknown) => R
  toBeBigNumberNaN: (this: unknown) => R
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

type This = {
  isNot: boolean
  promise: string
}

export function toBeBigNumber(
  this: unknown,
  received: unknown,
): jest.CustomMatcherResult {
  const { isNot, promise } = this as unknown as This
  const comment = 'BigNumber type validity'
  const options = { comment, isNot, promise }
  const pass = BigNumber.isBigNumber(received)
  const message = getMessage(
    pass,
    matcherHint('toBeBigNumber', undefined, undefined, options),
    printReceived(received),
    printExpected('BigNumber'),
  )
  return { message, pass }
}

export function toEqualBigNumber(
  this: unknown,
  received: unknown,
  expected: unknown,
): jest.CustomMatcherResult {
  const { isNot, promise } = this as unknown as This
  const comment = 'BigNumber type and optional value equality'
  const options = { comment, isNot, promise }
  const pass =
    BigNumber.isBigNumber(received) && received.eq(toBigNumber(expected))
  const message = getMessage(
    pass,
    matcherHint('toEqualBigNumber', undefined, undefined, options),
    printReceived(received),
    printExpected(toBigNumber(expected)),
  )
  return { message, pass }
}

export function toBeBigNumberNaN(
  this: unknown,
  received: unknown,
): jest.CustomMatcherResult {
  const { isNot, promise } = this as unknown as This
  const comment = 'BigNumber NaN equality'
  const options = { comment, isNot, promise }
  const pass = BigNumber.isBigNumber(received) && received.isNaN()
  const message = getMessage(
    pass,
    matcherHint('toBeBigNumberNaN', undefined, undefined, options),
    printReceived(received),
    printExpected(NaN),
  )
  return { message, pass }
}

function getMessage(
  pass: boolean,
  hint: string,
  received: string,
  expected: string,
): () => string {
  const not = pass ? 'not ' : ''
  return () => `${hint}\n\nExpected: ${not}${expected}\nReceived: ${received}`
}
