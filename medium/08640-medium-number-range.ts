// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";
type Result1 = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Result2 = 0 | 1 | 2;
type Result3 = 135 | 136 | 137 | 138 | 139 | 140;
type cases = [
  Expect<Equal<NumberRange<2, 9>, Result1>>,
  Expect<Equal<NumberRange<0, 2>, Result2>>,
  Expect<Equal<NumberRange<135, 140>, Result3>>
];

// ============= Your Code Here =============
type MyTuple<
  Num extends number,
  Arr extends readonly unknown[] = []
> = Arr["length"] extends Num ? Arr : MyTuple<Num, [never, ...Arr]>;

type MinusOne<T extends number> = MyTuple<T> extends [never, ...infer R]
  ? R["length"]
  : -1;

type NumberRange<
  L extends number,
  H extends number,
  A extends Array<number> = [L]
> = L extends H ? A[number] : NumberRange<L, MinusOne<H>, [H, ...A]>;
