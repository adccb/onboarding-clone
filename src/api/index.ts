import type { Person } from "../types";

export type Create = { verb: "PUT"; person: Person };
export type Update = { verb: "PATCH"; person: Person };
export type Delete = { verb: "DELETE"; person: Person };

export type ApiRequest = Create | Update | Delete;

const handleApiCall = (request: ApiRequest) => Promise.resolve(request.person);
export default handleApiCall;
