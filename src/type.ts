import BigNumber from 'bignumber.js'
export { default as BigNumber } from 'bignumber.js'

const inspect = Symbol.for('nodejs.util.inspect.custom') // for console.log etc

declare module 'bignumber.js' {
  interface BigNumber {
    [Symbol.toPrimitive]: (hint: string) => number | string
    [inspect]: () => string
  }
}

BigNumber.prototype[Symbol.toPrimitive] = function (
  hint: string,
): number | string {
  return hint === 'number' ? this.toNumber() : this.toFixed()
}
BigNumber.prototype[inspect] = function () {
  return `BigNumber(${this})`
}

export function toBigNumber(x?: unknown): BigNumber {
  return x instanceof BigNumber
    ? x
    : new BigNumber(typeof x === 'number' ? x : String(x))
}

export function toBigNumberOrNil(x?: unknown): BigNumber | undefined {
  return x === null || x === undefined ? undefined : toBigNumber(x)
}
