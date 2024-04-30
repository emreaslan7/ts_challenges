// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<EndsWith<"abc", "bc">, true>>,
  Expect<Equal<EndsWith<"abc", "abc">, true>>,
  Expect<Equal<EndsWith<"abc", "d">, false>>,
  Expect<Equal<EndsWith<"abc", "ac">, false>>,
  Expect<Equal<EndsWith<"abc", "">, true>>,
  Expect<Equal<EndsWith<"abc", " ">, false>>
];

// ============= Your Code Here =============
type EndsWith<T extends string, U extends string> = T extends `${infer _}${U}`
  ? true
  : T extends `${infer _}${infer Last}`
  ? U extends `${infer _}${infer LastU}`
    ? Last extends LastU
      ? EndsWith<Exclude<T, Last>, Exclude<U, LastU>>
      : false
    : false
  : false;
