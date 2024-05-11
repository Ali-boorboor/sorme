import { RecoilState, atom } from "recoil";

const isDropDownMenuVisible: RecoilState<boolean> = atom({
  key: "isDropDownMenuVisible",
  default: false,
});

const isMenuVisible: RecoilState<boolean> = atom({
  key: "isMenuVisible",
  default: false,
});

const dashboardActiveLink = atom({
  key: "dashboardActiveLink",
  default: "dashboard",
});

export { isDropDownMenuVisible, isMenuVisible, dashboardActiveLink };
