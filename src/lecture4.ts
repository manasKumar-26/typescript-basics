const obj = {
  some: 1,
  here: "any",
} as const;

const tupler = [1, 2, 4] as const;
// Helps us to some what replace ENUMS

function replaceEnum(params: typeof obj[keyof typeof obj]): void {
  console.log(params);
}

const message = "Manas";
const num = 3;

// As typesafe as TUPLE
const replaceTuple = [message, num, (): void => {}] as const;

// Function Overloading

function len(ip: string);
function len(ip: unknown[]);
function len(ip: any): number {
  return ip.length;
}

len("Manas");
len([1, 2, 4]);
// len(11);
// len({ length: 1 });

// Branded types

type USD = number & { _brand: "USD" };
type EUR = number & { _brand: "EUR" };

let dollar: USD = 10 as USD;
let eur: EUR = 10 as EUR;

function convertToDollars(money: EUR): USD {
  return (money * 1.19) as USD;
}

// Discriminating Unions - To discriminate between similar object types

interface FruitObject {
  type: "FruitObject";
  name: string;
  juice: () => void;
}

interface vegObject {
  type: "vegObject";
  name: string;
  steam: () => void;
}

/**
 * Assertion Signatures
 */

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const canvasContext = canvas.getContext("2d");
