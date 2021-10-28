type AppleLiteral = "APPLE" | null | undefined;
let appleName: AppleLiteral = "APPLE";

type conditional<T> = T extends string ? string : T;

type nonNullable<T> = T extends undefined | null ? never : T;

type appleNonNullable = nonNullable<AppleLiteral>;

type exclude<T, U> = T extends U ? never : T; // PolyFill for TS Exclude

type vType = "a" | "b";
type lType = "a" | "c";

type excludedUnion = exclude<vType, lType>; // b

type extract<T, U> = T extends U ? T : never;

type ReturnfuncType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any; // Polyfill for ReturnType

type unWrapArray<T> = T extends (infer R)[] ? R : T;

type unWrapPromise<T> = T extends Promise<infer R> ? R : T;
