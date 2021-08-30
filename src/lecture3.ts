// UNION TYPES

interface pointType {
  x: number;
  y: number;
}

type pointTuple = [number, number];

type pointUnion = pointType | pointTuple;

function measureDistance(point1: pointUnion, point2: pointUnion): number {
  const { x: x1, y: y1 } = extractXY(point1);
  const { x: x2, y: y2 } = extractXY(point2);

  return Math.sqrt(x1 + x2 + y1 + y2);
}

function extractXY(point: pointUnion): pointType {
  if (Array.isArray(point)) {
    return { x: point[0], y: point[1] };
  }
  return point;
}

// Intersection types

interface fruit {
  name: string;
  sweetness: number;
}

interface vegetable {
  name: string;
  spicy: number;
  //   sweetness: string;  Since primitive it will make sweetness as never type
}

type veganIntersection = fruit & vegetable;

const banana: veganIntersection = {
  name: "Banana",
  sweetness: 100,
  spicy: 0,
};

abstract class EdibleThing {
  // protected name: string = "";

  abstract eatFruit(): void;
  constructor(protected name: string) {
    this.name = name;
  }
}

class Fruit extends EdibleThing {
  // private sweet: number = 0;
  constructor(name: string, protected sweet: number) {
    super(name);
    this.sweet = sweet;
  }

  public eatFruit() {
    console.log("Here I'm fruit", this.name, this.sweet);
  }
}
