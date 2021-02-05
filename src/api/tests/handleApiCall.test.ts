import handleApiCall from "../";
import { getPerson } from "../../types/";
import type { Create, Update, Delete } from "../";

describe("handleApiCall", () => {
  it("should always give back the person provided", () => {
    const person = getPerson({
      first: "first",
      last: "last",
      vocation: "vocation",
    });

    const create: Create = { verb: "PUT", person };
    const update: Update = { verb: "PATCH", person };
    const del: Delete = { verb: "DELETE", person };

    [create, update, del].forEach((payload) =>
      handleApiCall(payload).then((response) =>
        expect(response).toEqual(person)
      )
    );
  });
});
