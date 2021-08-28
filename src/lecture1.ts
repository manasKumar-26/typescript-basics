let namedValue: string = "Manas";
let object: { a: number } = {
  a: 2,
};

const { a } = object;

const array: (string | number | object)[] = ["Manas", "Kumar", 1, { a: 1 }];

const mappedArray = array.map((ar, index) => console.log(ar));

function randomFunction(list) {
  let definedList: string = "Default value";

  if (list.length > 5) {
    definedList = "LONG";
  } else {
    definedList = "SHORT";
  }

  return definedList;
}

let typeAnnotationsObject: {
  id: string;
  name: string;
};

let anotherObject: object;

typeAnnotationsObject = {
  name: "Manas",
  id: "MNa",
};

function convertToLowerCase(text: string): string {
  return text.toLocaleLowerCase();
}

const nameArray: string[] = ["Manas", "Number", "HAHA"];
const loweredCaseNameArray = nameArray.map(convertToLowerCase);

/**
 * Handleing async functions return value - one way
 * @param {string} url
 * @returns {object}
 */

const getDataFromAPI = async (url: string): Promise<object> => {
  const response = await fetch(url);

  return response.json();
};

async function getDataFromAPIAnotherWay(url: string) {
  const response = await fetch(url);
  const result: object = await response.json();

  return result;
}

function consoleNumbers(
  num: number[],
  cb: (num: number) => void,
  optionalParameter?: boolean
) {
  num.map(cb);
}

consoleNumbers([1, 3], (item) => console.log(item));

export function unsureParams(first: number, ...unsure: string[]) {
  console.log(first);
  unsure.map((str) => console.log(str));
}

unsureParams(1, "HY", "HELLO");
