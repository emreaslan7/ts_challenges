// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>
];

// ============= Your Code Here =============
type Absolute<T extends number | string | bigint> = T extends number | bigint
  ? `${T}` extends `${infer A}${infer B}`
    ? A extends "-"
      ? `${B}`
      : `${A}${B}`
    : `${T}`
  : T extends `${infer F}${infer N}${infer L}`
  ? L extends "n"
    ? F extends "-"
      ? `${N}`
      : `${F}${N}`
    : F extends "-"
    ? `${N}${L}`
    : `${F}${N}${L}`
  : T;
