// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type PersonInfo = {
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
  readonlyArr: readonly ["test"];
  fn: () => any;
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
  readonlyArr: readonly [string];
  fn: Function;
};

type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];

// ============= Your Code Here =============
type ToPrimitive<T> = T extends object
  ? T extends (...args: never[]) => unknown
    ? Function
    : {
        [Key in keyof T]: ToPrimitive<T[Key]>;
      }
  : T extends { valueOf: () => infer P }
  ? P
  : T;

// Explanation:
// - If T is an object, we iterate over each key in T and recursively call ToPrimitive on each key.
// - If T is a function, we return Function.
// - If T has a valueOf method, we return the return type of valueOf.
// - Otherwise, we return T.
