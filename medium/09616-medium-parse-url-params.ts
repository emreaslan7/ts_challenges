// ============= Test Cases =============
import type { Equal, Expect } from "../.typeChallenges/test-utils";

type cases = [
  Expect<Equal<ParseUrlParams<"">, never>>,
  Expect<Equal<ParseUrlParams<":id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>
];

// ============= Your Code Here =============
type ParseUrlParams<T extends string> = T extends `${infer A}/:${infer B}`
  ? B extends `${infer A1}/:${infer B1}`
    ? A1 extends `${infer A2}/`
      ? A2
      : A1 | ParseUrlParams<B>
    : B extends `${infer B2}/${infer B3}`
    ? B2
    : B
  : T extends `:${infer T1}`
  ? T1
  : never;
