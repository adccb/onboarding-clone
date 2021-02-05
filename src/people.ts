import type { Person, Dict, GetPersonProps } from "./types/";
import { getPerson } from "./types/";

const musicians: Dict<GetPersonProps> = {
  jimi: { first: "Jimi", last: "Hendrix" },
  john: { first: "John", last: "Bonham", vocation: "drummer" },
  sheila: { first: "Shiela", last: "Escovedo", vocation: "drummer" },
  ozzy: { first: "John", last: "Osborne", vocation: "vocalist" },
  tosin: { first: "Tosin", last: "Abasi" },
  janis: { first: "Janis", last: "Joplin", vocation: "vocalist" },
  victor: { first: "Victor", last: "Wooten", vocation: "bassist" },
  kim: { first: "Kim", last: "Deal", vocation: "bassist" },
};

const people: Person[] = Object.values(musicians).map(getPerson);

export default people;
