// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];

// ============= Your Code Here =============
type Merge<F extends object, S extends object> = {
  [K in keyof S | keyof F]: K extends keyof F & keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : K extends keyof S
    ? S[K]
    : 2;
};
