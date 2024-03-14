import { PropsWithChildren, useEffect, createContext, useState } from "react";
import Taro, { useLaunch } from "@tarojs/taro";
import "./app.scss";
import "./static/css/iconfont.css";

interface MyContextType {
  tab: number;
  updateTab: (newValue: number) => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);
function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log("App launched.");
  });
  const [tab, setTab] = useState<number>(0);

  const updateTab = (newValue: number) => {
    setTab(newValue);
  };

  return (
    <MyContext.Provider value={{ tab, updateTab }}>
      {children}
    </MyContext.Provider>
  );
}

export default App;
