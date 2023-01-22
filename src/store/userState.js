import { atom } from "recoil";

export const userSteate = atom({
  key: "userSteate",
  default: { isAdmin: false }
});
