import { BigNumber } from 'bignumber.js';
export { BigNumber } from 'bignumber.js';
const inspect = Symbol.for('nodejs.util.inspect.custom'); // for console.log etc
BigNumber.prototype[Symbol.toPrimitive] = function (hint) {
    return hint === 'number' ? this.toNumber() : this.toFixed();
};
BigNumber.prototype[inspect] = function () {
    return `BigNumber(${this})`;
};
export function toBigNumber(x) {
    return x instanceof BigNumber
        ? x
        : new BigNumber(typeof x === 'number' ? x : String(x));
}
export function toBigNumberOrNil(x) {
    return x === null || x === undefined ? undefined : toBigNumber(x);
}
//# sourceMappingURL=type.js.map