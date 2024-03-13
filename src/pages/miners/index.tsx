import { useState } from "react";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import MinerList from "@/components/miner/MinerList";
import TabBar from "@/components/common/TabBar";
import Miners from "../../services/miners";
import NavBar from "../../components/common/NavBar";
import { MinerItem } from "../../../types/miner";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    // console.log("Page loaded.");
    new Miners().getMinersList().then((data) => {
      // console.log(data);
      setMinerList(data as MinerItem[]);
    });
  });
  const [minerList, setMinerList] = useState<MinerItem[] | undefined>([]);

  const handleSelectTab = (tab: string) => {
    console.log("Selected tab:", tab);
    // 这里可以添加处理选中菜单的逻辑
  };

  return (
    <View className="miners">
      <NavBar />
      {!!minerList?.length && <MinerList minerList={minerList} />}
      <TabBar onSelectTab={handleSelectTab} />
    </View>
  );
}
