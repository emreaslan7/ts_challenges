// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;

// explaination of the MyExclude type
// 1. MyExclude is a generic type that takes two type parameters T and U
// 2. T extends U checks if T extends U
// 3. if T extends U, then never is returned
// 4. if T does not extend U, then T is returned

// what is the role of never here?
// never is a type that represents the type of values that never occur
// it is used to represent the absence of a value
// in this case, never is used to exclude a type from another type
