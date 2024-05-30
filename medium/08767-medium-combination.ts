// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<
    Equal<
      Combination<["foo", "bar", "baz"]>,
      | "foo"
      | "bar"
      | "baz"
      | "foo bar"
      | "foo bar baz"
      | "foo baz"
      | "foo baz bar"
      | "bar foo"
      | "bar foo baz"
      | "bar baz"
      | "bar baz foo"
      | "baz foo"
      | "baz foo bar"
      | "baz bar"
      | "baz bar foo"
    >
  >
];

// ============= Your Code Here =============
type Combination<
  T extends string[],
  All = T[number],
  Item = All
> = Item extends string
  ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
  : never;

// explaination of the Combination type
// 1. Combination is a generic type that takes three type parameters T, All, and Item
// 2. T is a tuple of strings
// 3. All is the union of all the elements in T
// 4. Item is the current item in the tuple
// 5. Item extends string checks if Item extends string
// 6. if Item extends string, then Item | `${Item} ${Combination<[], Exclude<All, Item>>}` is returned
// 7. if Item does not extend string, then never is returned
// 8. `${Item} ${Combination<[], Exclude<All, Item>>}` is a template literal that combines the current item with the combination of the remaining items
// 9. Exclude<All, Item> removes the current item from the union of all items
// 10. Combination<[], Exclude<All, Item>> recursively calls the Combination type with an empty tuple and the remaining items
