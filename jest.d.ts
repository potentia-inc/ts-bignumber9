/// <reference types="jest" />
interface CustomMatchers<R = unknown> {
    toBeBigNumber: (this: unknown) => R;
    toEqualBigNumber: (this: unknown, expected: unknown) => R;
    toBeBigNumberNaN: (this: unknown) => R;
}
declare global {
    namespace jest {
        interface Expect extends CustomMatchers {
        }
        interface Matchers<R> extends CustomMatchers<R> {
        }
        interface InverseAsymmetricMatchers extends CustomMatchers {
        }
    }
}
export declare function toBeBigNumber(this: unknown, received: unknown): jest.CustomMatcherResult;
export declare function toEqualBigNumber(this: unknown, received: unknown, expected: unknown): jest.CustomMatcherResult;
export declare function toBeBigNumberNaN(this: unknown, received: unknown): jest.CustomMatcherResult;
export {};
