import BigNumber from 'bignumber.js'
export { BigNumber }

export function toBigNumber(x?: unknown): BigNumber {
  return x instanceof BigNumber
    ? x
    : new BigNumber(typeof x === 'number' ? x : String(x))
}

export function toBigNumberOrNil(x?: unknown): BigNumber | undefined {
  return x === null || x === undefined ? undefined : toBigNumber(x)
}
