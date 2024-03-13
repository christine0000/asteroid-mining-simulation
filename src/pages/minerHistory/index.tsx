import { View } from "@tarojs/components";
import { useState } from "react";
import { useLoad } from "@tarojs/taro";
import NavBar from "../../components/common/NavBar";
import MinerTitle from "../../components/miners/MinerTitle";
import Miners from "../../services/miners";
import "./index.scss";

export default function MinerDetails() {
  const [currentTick, setCurrentTick] = useState<number>(0);
  const [minerHistory, setMinerHistory] = useState([]);
  useLoad(() => {
    new Miners().getMinerHistory("").then((data) => {
      // setMinerHistory(data);
    });
  });
  return (
    <View className="miner-item">
      <NavBar />
      <MinerTitle years={currentTick} />
    </View>
  );
}
