interface CustomMatchers<R = unknown> {
    toBeBigNumber: (this: unknown) => R;
    toBeBigNumberString: (this: unknown) => R;
    toEqualBigNumber: (this: unknown, expected: unknown) => R;
    toEqualBigNumberString: (this: unknown, expected: unknown) => R;
    toBeBigNumberNaN: (this: unknown) => R;
    toBeBigNumberNaNString: (this: unknown) => R;
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
export declare function toBeBigNumberString(this: unknown, received: unknown): jest.CustomMatcherResult;
export declare function toEqualBigNumber(this: unknown, received: unknown, expected: unknown): jest.CustomMatcherResult;
export declare function toEqualBigNumberString(this: unknown, received: unknown, expected: unknown): jest.CustomMatcherResult;
export declare function toBeBigNumberNaN(this: unknown, received: unknown): jest.CustomMatcherResult;
export declare function toBeBigNumberNaNString(this: unknown, received: unknown): jest.CustomMatcherResult;
export {};
