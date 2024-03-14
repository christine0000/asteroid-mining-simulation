import { View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/common/NavBar";
import TabBar from "../../components/common/TabBar";
import MinerTitle from "../../components/miners/MinerTitle";
import MapContent from "../../components/liveMap/MapContent";
import { MyContext } from "../../app";
import { tabList } from "../../constant";
import "./index.scss";
import socket from "../../utils/socket";

export default function Index() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  useLoad(() => {
    const { updateTab } = context;
    const pages = Taro.getCurrentPages();
    const currentPageUrl = pages[pages.length - 1].route;
    updateTab(tabList.findIndex((tab) => tab.url === currentPageUrl));
  });
  const [yearNo, setYearNo] = useState(0);
  useEffect(() => {
    socket.on("tick", (...args) => {
      setYearNo(args[0].currentTick);
    });
  }, []);
  return (
    <View className="live-map">
      <NavBar />
      <MinerTitle years={yearNo} />
      <MapContent />
      <TabBar />
    </View>
  );
}
