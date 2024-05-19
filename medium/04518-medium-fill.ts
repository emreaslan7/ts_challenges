// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
];

// ============= Your Code Here =============
type MyTuple<
  Num extends number,
  Arr extends readonly unknown[] = []
> = Arr["length"] extends Num ? Arr : MyTuple<Num, [never, ...Arr]>;

type MinusOne<T extends number> = MyTuple<T> extends [never, ...infer R]
  ? R["length"]
  : -1;

type GreaterThan<
  T extends number,
  U extends number,
  C extends any[] = []
> = C["length"] extends T
  ? false
  : C["length"] extends U
  ? true
  : GreaterThan<T, U, [...C, 1]>;

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"]
> = End extends 0
  ? T
  : GreaterThan<End, T["length"]> extends true
  ? T extends [infer F, ...infer R]
    ? Start extends 0
      ? [N, ...Fill<R, N, Start, T["length"]>]
      : [F, ...Fill<R, N, Start, T["length"]>]
    : T
  : T extends [infer F, ...infer R]
  ? Start extends 0
    ? [N, ...Fill<R, N, Start, MinusOne<End>>]
    : [F, ...Fill<R, N, MinusOne<Start>, MinusOne<End>>]
  : T;
