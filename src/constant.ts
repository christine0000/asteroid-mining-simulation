export const MINER_STATUS_MAP: { [key: number]: string } = {
  0: "Idle",
  1: "Traveling",
  2: "Mining",
  3: "Transfering",
};

export const tabList = [
  {
    name: "Miners",
    activeIconClass: "icon-miners-on",
    inactiveIconClass: "icon-miners-off",
    url: "/pages/miners/index",
    indicatorPosition: "6%",
  },
  {
    name: "Live Map",
    activeIconClass: "icon-Icon-livemap",
    inactiveIconClass: "icon-Icon-livemapoff",
    url: "/pages/liveMap/index",
    indicatorPosition: "56%",
  },
];
export const titleBarHeight="60px"
