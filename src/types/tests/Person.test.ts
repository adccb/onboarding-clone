import { isPerson, getPerson } from "../";
import type { Person } from "../";

describe("isPerson", () => {
  it("correctly identifies Person objects", () => {
    const person = getPerson({
      first: "first",
      last: "last",
      vocation: "vocalist",
    });

    expect(isPerson(person)).toBe(true);
  });

  it("errors on partials and malformed data", () => {
    const nothing = {};
    expect(isPerson(nothing)).toBe(false);

    const partial: Partial<Person> = {
      vocation: "i have a job",
    };

    expect(isPerson(partial)).toBe(false);
  });
});
