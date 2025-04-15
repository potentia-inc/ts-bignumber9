import BigNumber from 'bignumber.js';
export { BigNumber };
export function toBigNumber(x) {
    return x instanceof BigNumber
        ? x
        : new BigNumber(typeof x === 'number' ? x : String(x));
}
export function toBigNumberOrNil(x) {
    return x === null || x === undefined ? undefined : toBigNumber(x);
}
//# sourceMappingURL=type.js.map