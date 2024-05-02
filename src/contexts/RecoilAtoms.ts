import { RecoilState, atom } from "recoil";

const isDropDownMenuVisible: RecoilState<boolean> = atom({
  key: "isDropDownMenuVisible",
  default: false,
});

export { isDropDownMenuVisible };
