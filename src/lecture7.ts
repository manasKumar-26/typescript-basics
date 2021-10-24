/**
 * Mapped types
 */

interface veggies {
  name: string;
  color: string;
  readonly chilli: number;
}

type Property<T> = keyof T;
type Value<T> = T[Property<T>];

type veggiesProp = Property<veggies>;
type veggiesPropValues = Value<veggies>;

// type checkType = veggies[keyof veggies]; Implementation check for abvoe code

// type checkProp = keyof veggies;

// Loop over using in keyword and just add read only as to create a duplicate readonly type

type readOnlyInterfaces<T> = {
  readonly [P in Property<T>]: T[P];
};

type removeReadOnly<T> = {
  -readonly [P in Property<T>]: T[P];
};

type makeOptionalModifier<T> = {
  [P in Property<T>]?: T[P];
};

type makeRequiredModifier<T> = {
  [P in Property<T>]-?: T[P];
};

type readOnlyVeggies = readOnlyInterfaces<veggies>;

type nonreadOnly = removeReadOnly<veggies>;
