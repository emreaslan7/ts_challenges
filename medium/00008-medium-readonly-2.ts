// ============= Test Cases =============
import type { Alike, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// ============= Your Code Here =============

type MyReadonly2<T, K> = {
  readonly [key in keyof T as key extends K ? key : never]: T[key];
} & {
  [key in keyof T as key extends K ? never : key]: T[key];
};
