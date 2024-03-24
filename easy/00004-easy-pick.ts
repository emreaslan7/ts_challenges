// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// ============= Learning Description =============

// In this challenge, I created a type alias called `MyPick` that takes two type parameters `T` and `K`.
// The `T` parameter is a generic type that represents the type of the object we want to pick properties from.
// The `K` parameter is a generic type that represents the keys of the properties we want to pick.
// Inside the type alias, I used a mapped type to iterate over the keys in `K` and pick the corresponding properties from `T`.
// The mapped type creates a new object type with the selected properties.
// I used the `in` keyword to iterate over the keys in `K` and access the corresponding properties in `T`.
// The resulting type is an object type with the selected properties from `T`.
