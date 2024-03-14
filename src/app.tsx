import { PropsWithChildren, useEffect, createContext, useState } from "react";
import Taro, { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "./static/css/iconfont.css";

interface MyContextType {
  tab: number;
  updateTab: (newValue: number) => void;
  titleBarHeight: string;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);
function App({ children }: PropsWithChildren) {
  let titleBarHeight: string = "58px";
  useLaunch(() => {
    console.log("App launched.");
  });
  useEffect(() => {
    Taro.getSystemInfo().then((res) => {
      if (res.model.indexOf("iPhone") !== -1) {
        titleBarHeight = "54px";
      }
    });
  }, []);
  const [tab, setTab] = useState<number>(0);

  const updateTab = (newValue: number) => {
    setTab(newValue);
  };

  return (
    <MyContext.Provider value={{ tab, updateTab, titleBarHeight }}>
      {children}
    </MyContext.Provider>
  );
}

export default App;
