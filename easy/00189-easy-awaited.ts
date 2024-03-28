// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

// explaination of the MyAwaited type
// 1. MyAwaited is a generic type that takes a type parameter T
// 2. T extends PromiseLike<any> checks if T is a PromiseLike type
// 3. if T is a PromiseLike type, then the type parameter U is inferred from T
// 4. U extends PromiseLike<any> checks if U is a PromiseLike type
// 5. if U is a PromiseLike type, then MyAwaited<U> is called recursively
// 6. if U is not a PromiseLike type, then U is returned

// WHAT is role of infer here?
// infer is used to infer the type of the generic type parameter of a type
