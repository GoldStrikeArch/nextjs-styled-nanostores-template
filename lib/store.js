import { atom, map } from "nanostores";

export const counter = atom(0);
export const profile = map({
  name: "anonymous",
});
