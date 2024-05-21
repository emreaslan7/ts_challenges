// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
type Without<
  T extends Array<unknown>,
  U extends Array<unknown> | Number
> = U extends Array<number>
  ? T extends [infer Head, ...infer Tail]
    ? Head extends U[number]
      ? Without<Tail, U>
      : [Head, ...Without<Tail, U>]
    : []
  : T extends [infer Head, ...infer Tail]
  ? Head extends U
    ? Without<Tail, U>
    : [Head, ...Without<Tail, U>]
  : [];
