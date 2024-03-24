// ============= Test Cases =============
import type { Equal, Expect, NotAny } from "../.typeChallenges/test-utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

// ============= Your Code Here =============
type HelloWorld = string;

// ============= Learning Description =============

// In this challenge, I learned how to create a type alias in TypeScript.
// In TypeScript, you can create a type alias by using the `type` keyword.
// In this challenge, I created a type alias called `HelloWorld` and assigned it the type `string`.
