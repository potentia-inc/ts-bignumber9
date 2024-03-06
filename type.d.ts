import BigNumber from 'bignumber.js';
export { default as BigNumber } from 'bignumber.js';
declare const inspect: unique symbol;
declare module 'bignumber.js' {
    interface BigNumber {
        [Symbol.toPrimitive]: (hint: string) => number | string;
        [inspect]: () => string;
    }
}
export declare function toBigNumber(x?: unknown): BigNumber;
export declare function toBigNumberOrNil(x?: unknown): BigNumber | undefined;
