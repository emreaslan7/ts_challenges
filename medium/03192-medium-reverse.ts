// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];

type errors = [Reverse<"string">, Reverse<{ key: "value" }>];

// ============= Your Code Here =============
type Reverse<T, U extends Array<any> = []> = T extends [infer F, ...infer R]
  ? Reverse<R, [F, ...U]>
  : U;
