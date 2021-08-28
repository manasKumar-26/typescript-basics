interface Vehicle {
  wheels: number;
  price: number;
  [baseSpeed: string]: number;
}

interface edible {
  name: string;
  calories: number;
}

interface Fruit extends edible {
  sweetness: number;
  [randomRunTimeProp: string]: string | number;
}

interface Vegetable extends edible {
  sourness: number;
}

const car: Vehicle = { wheels: 4, price: 500000 };
const bike: Vehicle = { wheels: 2, price: 100000 };

bike.topSpeed = 200;

const veganBasket: Fruit[] = [{ name: "Mango", calories: 100, sweetness: 2 }];

const brinjal: Vegetable = { name: "brinjal", calories: 34, sourness: 2 };

// veganBasket.push(brinjal); Cannot do this now

export enum seasons {
  winter,
  summer,
}

// The above enum gets converted to the IIFE below

// var seasons;
// (function (seasons) {
//     seasons[seasons["winter"] = 0] = "winter";
//     seasons[seasons["summer"] = 1] = "summer";
// })(seasons || (seasons = {}));

function expectEnum(season: seasons): string {
  if (season === seasons.summer) {
    return "HOT!!! I'm summer";
  }
  if (season === seasons.winter) {
    return "COLD!!! I'm winter";
  }

  throw new Error("Season Unavailable");
}

console.log(expectEnum(seasons.summer));

// Loose copy of useState react hook -> Tuple TS

let state: any = "";
function useState(initialState: any): [any, (updateValue: any) => void] {
  state = initialState;

  function updater(updatedState: any) {
    state = updatedState;
  }

  return [state, updater];
}

const [newState, updateNewSTate] = useState("Manas");

type randomGeneratedSomethingType = [number, (value: number) => string];

function typeAliasFunction(props: randomGeneratedSomethingType): void {}
