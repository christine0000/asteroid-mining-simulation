import { PropsWithChildren, useEffect } from "react";
import Taro, { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "./static/css/iconfont.css";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
    // 在组件加载时获取系统信息
  });
  useEffect(() => {
    console.log("app useEffect");
    Taro.getSystemInfo().then((res: any) => {
      console.log(res);
      let titleBarHeight = "0px";
      let statusBarHeight = "0px";
      // 更新状态栏高度和标题栏高度
      if (res.model.indexOf("iPhone") !== -1) {
        titleBarHeight = 44 + "px";
      } else {
        titleBarHeight = 48 + "px";
      }
      statusBarHeight = res.statusBarHeight + "px";
      Taro.setStorageSync("titleBarHeight", titleBarHeight);
      Taro.setStorageSync("statusBarHeight", statusBarHeight);
    });
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
