export default defineAppConfig({
  pages: ["pages/miners/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#241B2D",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
    navigationStyle: "custom",
  },
  tabBar: {
    custom: true,
    list: [
      {
        text: "首页",
        pagePath: "pages/miners/index", //页面路由地址，需要在上面的pages中也添加该路由
        // iconPath: "assets/tabbar/home.png", //底部导航栏图标
        // selectedIconPath: "assets/tabbar/home_active.png", //底部导航栏选中图标
      },
      {
        text: "test",
        pagePath: "pages/miners/index",
        // iconPath: "assets/tabbar/add.png",
        // selectedIconPath: "assets/tabbar/add_active.png",
      },
    ],
  },
});
