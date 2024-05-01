// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
];

// ============= Your Code Here =============
type Merge<T> = {
  [p in keyof T]: T[p];
};

type PartialByKeys<T, K extends keyof T | "unknown" = keyof T> = Merge<
  {
    [k in Exclude<keyof T, K>]: T[k];
  } & {
    [key in keyof T as key extends K ? key : never]?: T[key];
  }
>;
