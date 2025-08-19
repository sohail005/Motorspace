// src/navigation/TabService.js
let setActiveTabFn;

export const setTabController = (fn) => {
  setActiveTabFn = fn;
};

export const switchTab = (index) => {
  if (setActiveTabFn) {
    setActiveTabFn(index);
  }
};
