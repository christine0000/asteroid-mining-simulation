import { useState } from "react";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import MinerList from "../../components/miners/MinerList";
import TabBar from "../../components/common/TabBar";
import socket from "../../utils/socket";
// import Miners from "../../services/miners";
import NavBar from "../../components/common/NavBar";
import { MinerItem } from "../../../types/miner";
import MinerTitle from "../../components/miners/MinerTitle";
import "./index.scss";

export default function Index() {
  const [minerList, setMinerList] = useState<MinerItem[] | undefined>([]);
  const [currentTick, setCurrentTick] = useState<number>(0);
  useLoad(() => {
    // console.log("Page loaded.");
    // new Miners().getMinersList().then((data) => {
    //   setMinerList(data as MinerItem[]);
    // });
    socket.on("tick", (...args) => {
      // console.log("args", args);
      setMinerList([ ...args[0].miners ]);
      setCurrentTick(args[0].currentTick)
      // console.log("dataSource", dataSource);
    });
  });

  const handleSelectTab = (tab: string) => {
    console.log("Selected tab:", tab);
    // TODO add logic for change tab
  };

  return (
    <View className="miners">
      <NavBar />
      <MinerTitle years={currentTick} />
      {!!minerList?.length && <MinerList minerList={minerList} />}
      <TabBar onSelectTab={handleSelectTab} />
    </View>
  );
}
