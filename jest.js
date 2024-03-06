/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { BigNumber, toBigNumber } from './type.js';
import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
export function toBeBigNumber(received) {
    const { isNot, promise } = this;
    const comment = 'BigNumber type validity';
    const options = { comment, isNot, promise };
    const pass = BigNumber.isBigNumber(received);
    const message = getMessage(pass, matcherHint('toBeBigNumber', undefined, undefined, options), printReceived(received), printExpected('BigNumber'));
    return { message, pass };
}
export function toEqualBigNumber(received, expected) {
    const { isNot, promise } = this;
    const comment = 'BigNumber type and optional value equality';
    const options = { comment, isNot, promise };
    const pass = BigNumber.isBigNumber(received) && received.eq(toBigNumber(expected));
    const message = getMessage(pass, matcherHint('toEqualBigNumber', undefined, undefined, options), printReceived(received), printExpected(toBigNumber(expected)));
    return { message, pass };
}
export function toBeBigNumberNaN(received) {
    const { isNot, promise } = this;
    const comment = 'BigNumber NaN equality';
    const options = { comment, isNot, promise };
    const pass = BigNumber.isBigNumber(received) && received.isNaN();
    const message = getMessage(pass, matcherHint('toBeBigNumberNaN', undefined, undefined, options), printReceived(received), printExpected(NaN));
    return { message, pass };
}
function getMessage(pass, hint, received, expected) {
    const not = pass ? 'not ' : '';
    return () => `${hint}\n\nExpected: ${not}${expected}\nReceived: ${received}`;
}
//# sourceMappingURL=jest.js.map