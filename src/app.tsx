import { PropsWithChildren, useEffect, createContext, useState } from "react";
import Taro, { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "./static/css/iconfont.css";

interface MyContextType {
  tab: number;
  updateTab: (newValue: number) => void;
  titleBarHeight: string;
  statusBarHeight: string;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);
function App({ children }: PropsWithChildren) {
  let titleBarHeight: string = "48px";
  let statusBarHeight: string = "47px";
  useLaunch(() => {
    console.log("App launched.");
  });
  useEffect(() => {
    Taro.getSystemInfo().then((res) => {
      if (res.model.indexOf("iPhone") !== -1) {
        titleBarHeight = 44 + "px";
      }
    });
  }, []);
  const [tab, setTab] = useState<number>(0);

  const updateTab = (newValue: number) => {
    setTab(newValue);
  };

  return (
    <MyContext.Provider
      value={{ tab, updateTab, titleBarHeight, statusBarHeight }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default App;
