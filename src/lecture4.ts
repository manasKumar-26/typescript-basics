const obj = {
  some: 1,
  here: "any",
} as const;

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
