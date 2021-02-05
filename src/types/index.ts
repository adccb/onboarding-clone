// general purpose types
export type Dict<T> = Record<string, T>;
export type StringDict = Dict<string>;

// Person-specific types
export type Name = { first: string; last: string };
export type Vocation = "vocalist" | "guitarist" | "bassist" | "drummer";

export type Person = {
  name: Name;
  vocation: Vocation;
};

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
export const isPerson = (foo: object | Person): foo is Person =>
  "name" in foo &&
  "vocation" in foo &&
  typeof foo.name === "object" &&
  typeof foo.name.first === "string" &&
  typeof foo.name.first === "string" &&
  typeof foo.vocation === "string";

// for testing purposes i always like to include one of these
export type GetPersonProps = {
  first?: string;
  last?: string;
  vocation?: Vocation;
};
export const getPerson = ({
  first = "Kurt",
  last = "Cobain",
  vocation = "guitarist",
}: GetPersonProps = {}): Person => ({
  name: { first, last },
  vocation,
});
