// general purpose types
type None = null;

export type Dict<T> = Record<string, T>; // this is a hash with string keys and T values. typeof { one: 1 } === Dict<Number>
export type StringDict = Dict<string>; // string keys and string values. typeof { one: '1' } === StringDict
export type Maybe<T> = T | None; // helpful with type guards; you can use `isPerson` to unwrap the maybe

// Person-specific types
export type Name = { first: string; last: string };
export type Vocation = "vocalist" | "guitarist" | "bassist" | "drummer"; // this is a union type—all four of those strings count
export const vocations: Dict<Vocation> = {
  vocalist: "vocalist",
  guitarist: "guitarist",
  bassist: "bassist",
  drummer: "drummer",
};

export type Person = {
  name: Name;
  vocation: Vocation;
};

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
export const isPerson = (foo: null | object | Person): foo is Person =>
  foo !== null && // accounts for Maybe<Person>
  "name" in foo &&
  "vocation" in foo &&
  typeof foo.name === "object" &&
  typeof foo.name.first === "string" &&
  typeof foo.name.first === "string" &&
  foo.vocation in vocations; // make sure the vocation is actually valid

export const isSamePerson = (p: Person, q: Person) =>
  p.name.first === q.name.first &&
  p.name.last === q.name.last &&
  p.vocation === q.vocation;

// for testing purposes i always like to include one of these. generate a person
// from the raw data, so any caller doesn't have to worry about the specific shape
// of the Person type
export type GetPersonProps = {
  first?: string;
  last?: string;
  vocation: Vocation;
};

export const getPerson = ({
  first,
  last,
  vocation,
}: GetPersonProps): Maybe<Person> =>
  typeof first === "string" && typeof last === "string" && vocation in vocations
    ? {
        name: { first, last },
        vocation,
      }
    : null;
