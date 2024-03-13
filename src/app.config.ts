export default defineAppConfig({
  pages: ["pages/miners/index","pages/minerHistory/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#241B2D",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
    navigationStyle: "custom",
  },
  // tabBar: {
  //   custom: true,
  //   list: [
  //     {
  //       text: "HOME",
  //       pagePath: "pages/miners/index",
  //     },
  //     {
  //       text: "TEST",
  //       pagePath: "pages/miners/index",
  //     },
  //   ],
  // },
});
