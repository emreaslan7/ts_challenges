// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

const foobar = Symbol("foobar");
type FooBar = {
  [key: symbol]: any;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];

// ============= Your Code Here =============
type RemoveIndexSignature<T, P = string | number | symbol> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};

// type RemoveIndexSignature<T> = {
//   [K in keyof T as /* filters out all 'string' keys */
//   string extends K
//     ? never
//     : /* filters out all 'number' keys */
//     number extends K
//     ? never
//     : /* filers out all 'symbol' keys */
//     symbol extends K
//     ? never
//     : K /* all that's left are literal type keys */]: T[K];
// };
