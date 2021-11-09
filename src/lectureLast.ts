/**
 * Recursive Type check
 */

type Unwrap<T> = T extends (infer R)[] ? Unwrap<R> : T;

//  declare function flattenArray<T extends any[]>(array: T): Unwrap<T>[]; ==> Ambient function declaration

// function flattenArray(array) {
//   const flatArray = [];
//   array.forEach((arr) => {
//     Array.isArray(arr)
//       ? flatArray.concat(flattenArray(arr))
//       : flatArray.push(arr);
//   });

//   return flatArray;
// }

function flattenArray<T extends any[]>(array: T): Unwrap<T>[] {
  return array.reduce((accumulator, current) => {
    if (Array.isArray(current)) {
      return accumulator.concat(flattenArray(current));
    }

    return accumulator.concat(current);
  }, []);
}

export function global() {
  const nestedArray = [1, 3, [1, [2, 3, [3, "1"]]]];

  const flattenArrayValues = flattenArray(nestedArray);

  const a = flattenArray([1]);

  console.log(flattenArrayValues);
}

global();

/**
 * Type interpolation
 */

type seasons = "SUMMER" | "WINTER" | 1;
type day = "MON" | "TUE";

type allSeasonDayCombination = `${seasons}-${day}`; // "SUMMER-MON" | "SUMMER-TUE" | "WINTER-MON" | "WINTER-TUE"

type seasonStart = {
  -readonly [season in `${string & seasons}START`]-?: string; // Use only string keys
};

const searsonStart: seasonStart = {
  SUMMERSTART: "1",
  WINTERSTART: "3",
};

type IPCHECK = `${number}.${number}.${number}.${number}`; // Number should be in this format 192.000.11.1 >> Match Pattern

type tupleMatchPattern<T extends string> = T extends `[${infer A},${infer B}]`
  ? A | B
  : string;

type tupleMatchPatternUSE = tupleMatchPattern<`[hello,world]`>;

/**
 * Infering Type
 */

type AddOnMethod<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}changed`,
    callback: (newValue: T[K]) => void
  ): void;
};

declare function watchAbleProperties<T>(object: T): T & AddOnMethod<T>; // Ambient function declaration

let f = watchAbleProperties({
  name: "Mango",
  sweet: 80,
});

f.on("namechanged", (newVal) => {}); // Check
