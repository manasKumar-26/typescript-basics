class FruitBasket<T extends fruit = Apple> {
  constructor(public fruits: T[] = []) {}

  add(fruit: T) {
    this.fruits.push(fruit);
  }
}

class fruit {
  isFruit = true;
  constructor(public fruit: string) {}
}

class Apple extends fruit {
  type: "Apple";
  constructor() {
    super("Apple");
  }
}

class Banana extends fruit {
  type: "Banana";
  constructor() {
    super("Banana");
  }
}

const AppleBasket = new FruitBasket();
const bananaBasket = new FruitBasket([new Banana()]);

const bananaBasket2 = new FruitBasket<Banana>();

AppleBasket.add(new Apple());
//AppleBasket.add(new Banana());

function getObjectValue<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}
