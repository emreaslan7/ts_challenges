// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<Trunc<0.1>, "0">>,
  Expect<Equal<Trunc<0.2>, "0">>,
  Expect<Equal<Trunc<1.234>, "1">>,
  Expect<Equal<Trunc<12.345>, "12">>,
  Expect<Equal<Trunc<-5.1>, "-5">>,
  Expect<Equal<Trunc<".3">, "0">>,
  Expect<Equal<Trunc<"1.234">, "1">>,
  Expect<Equal<Trunc<"-10.234">, "-10">>,
  Expect<Equal<Trunc<10>, "10">>
];

// ============= Your Code Here =============
type StartsWith<T extends string, U extends string> = T extends U
  ? true
  : T extends `${infer L}${infer R}`
  ? U extends `${infer A}${infer B}`
    ? L extends A
      ? StartsWith<R, B>
      : U["length"] extends 0
      ? true
      : false
    : true
  : U["length"] | T["length"] extends 0
  ? true
  : false;

type Trunc<T extends string | number> = StartsWith<`${T}`, "."> extends true
  ? "0"
  : T extends `${infer Head}.${infer Tail}`
  ? Head
  : `${T}` extends `${infer Head}.${infer _}`
  ? Head
  : `${T}`;

const test: Trunc<".4"> = "0";
