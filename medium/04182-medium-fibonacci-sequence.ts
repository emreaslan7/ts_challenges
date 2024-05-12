// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
];

// ============= Your Code Here =============
type MyTuple<
  Num extends number,
  Arr extends readonly unknown[] = []
> = Arr["length"] extends Num ? Arr : MyTuple<Num, [never, ...Arr]>;

type MinusOne<T extends number> = MyTuple<T> extends [never, ...infer R]
  ? R["length"]
  : -1;

type Length<T extends any[]> = T extends { length: infer L } ? L : never;

type BuildTuple<L, T extends any[] = []> = T extends { length: L }
  ? T
  : BuildTuple<L, [...T, any]>;

type Add<A, B> = Length<[...BuildTuple<A>, ...BuildTuple<B>]>;

type Fibonacci<T extends number, U extends Array<number> = [1, 1]> = T extends 1
  ? 1
  : T extends U["length"]
  ? U[MinusOne<U["length"]>]
  : U extends [...infer _, infer L2, infer L1]
  ? Add<L1, L2> extends number
    ? Fibonacci<T, [...U, Add<L1, L2>]>
    : never
  : never;
