// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<0>, -1>>
];

// ============= Your Code Here =============
type MyTuple<
  Num extends number,
  Arr extends readonly unknown[] = []
> = Arr["length"] extends Num ? Arr : MyTuple<Num, [never, ...Arr]>;

type MinusOne<T extends number> = MyTuple<T> extends [never, ...infer R]
  ? R["length"]
  : -1;

// I did not solve this :(
