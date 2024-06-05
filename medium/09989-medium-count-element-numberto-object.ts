// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";
type cases = [
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5]>,
      {
        1: 1;
        2: 1;
        3: 1;
        4: 1;
        5: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>,
      {
        1: 2;
        2: 2;
        3: 2;
        4: 1;
        5: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
      {
        1: 3;
        2: 3;
        3: 2;
        4: 3;
        5: 1;
      }
    >
  >,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<
    Equal<
      CountElementNumberToObject<["1", "2", "0"]>,
      {
        0: 1;
        1: 1;
        2: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<["a", "b", ["c", ["d"]]]>,
      {
        a: 1;
        b: 1;
        c: 1;
        d: 1;
      }
    >
  >
];

// ============= Your Code Here =============

type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : [];

type Count<T extends any[], X> = T extends [infer F, ...infer R]
  ? F extends X
    ? [F, ...Count<R, X>]
    : [...Count<R, X>]
  : [];

type Mapped<T extends any[]> = {
  [key in T[number]]: Count<T, key>["length"];
};

type CountElementNumberToObject<T extends any[]> = Mapped<Flatten<T>>;
