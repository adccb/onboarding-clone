import handleApiCall from "../";
import { getPerson } from "../../types/";
import type { Create, Update, Delete } from "../";

describe("handleApiCall", () => {
  it("should always give back the person provided", () => {
    const person = getPerson();

    const create: Create = { verb: "PUT", person };
    const update: Update = { verb: "PATCH", person };
    const del: Delete = { verb: "DELETE", person };

    [create, update, del].forEach((payload) =>
      expect(handleApiCall(payload)).toEqual(person)
    );
  });
});
