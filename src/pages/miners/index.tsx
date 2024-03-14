import { useContext, useState } from "react";
import { View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import MinerList from "../../components/miners/MinerList";
import TabBar from "../../components/common/TabBar";
import socket from "../../utils/socket";
// import Miners from "../../services/miners";
import NavBar from "../../components/common/NavBar";
import { MinerItem } from "../../../types/miner";
import MinerTitle from "../../components/miners/MinerTitle";
import { tabList } from "../../constant";
import { MyContext } from "../../app";
import "./index.scss";

export default function Index() {
  const [minerList, setMinerList] = useState<MinerItem[] | undefined>([]);
  const [currentTick, setCurrentTick] = useState<number>(0);
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  useLoad(() => {
    // console.log("Page loaded.");
    // new Miners().getMinersList().then((data) => {
    //   setMinerList(data as MinerItem[]);
    // });
    const { updateTab } = context;
    const pages = Taro.getCurrentPages();
    const currentPageUrl = pages[pages.length - 1].route;
    updateTab(tabList.findIndex((tab) => tab.url === currentPageUrl));
    socket.on("tick", (...args) => {
      // console.log("args", args);
      setMinerList([ ...args[0].miners ]);
      setCurrentTick(args[0].currentTick)
    });
  });

  return (
    <View className="miners">
      <NavBar />
      <MinerTitle years={currentTick} />
      {!!minerList?.length && <MinerList minerList={minerList} />}
      <TabBar />
    </View>
  );
}
