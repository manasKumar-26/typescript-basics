/**
 * USER defined type guards
 */

interface fruit {
  name: string;
  calories: number;
}

interface veg {
  name: string;
  sour: number;
}

// Try removing food is fruit

const isFruit = (food: fruit | veg): food is fruit => "calories" in food;

function printFood(food: fruit | veg) {
  if (isFruit(food)) {
    console.log(food.calories);
  } else {
    console.log(food.sour);
  }
}

/**
 * if below function throws an error then food is not a fruit
 */

function assetIsFruit(food: any): asserts food is fruit {
  if (!("calories" in food)) throw new Error("Not a fruit");
}

/**
 * Generics
 */

const getFirst = <T>(list: T[]): T => list[0];

const item1 = getFirst([1, 3, 3]);
const item2 = getFirst([1, 3, 3, "HHH"]);

class FruitType {
  constructor() {}
}

const item3 = getFirst([new FruitType(), new FruitType()]);

type Tree<T> = {
  root: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

const FruitTree: Tree<veg> = {
  root: { name: "APPLE", sour: 22 },
  left: {
    root: { name: "APPLE", sour: 22 },
    right: {
      root: { name: "APPLE", sour: 22 },
    },
  },
  right: {
    root: { name: "APPLE", sour: 22 },
    left: {
      root: { name: "APPLE", sour: 22 },
    },
  },
};
