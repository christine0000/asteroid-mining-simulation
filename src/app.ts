import { PropsWithChildren, useEffect } from "react";
import Taro, { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "./static/css/iconfont.css";

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log("App launched.");
  });
  useEffect(() => {
    Taro.getSystemInfo().then((res) => {
      let titleBarHeight = "0px";
      let statusBarHeight = "47px";
      if (res.model.indexOf("iPhone") !== -1) {
        titleBarHeight = 44 + "px";
      } else {
        titleBarHeight = 48 + "px";
      }
      // statusBarHeight = res.statusBarHeight + "px";
      Taro.setStorageSync("titleBarHeight", titleBarHeight);
      Taro.setStorageSync("statusBarHeight", statusBarHeight);
    });
  });

  return children;
}

export default App;
