import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { titleBarHeight } from "../../constant";
import { Miner } from "../../types/miner";
import "./HistoryTopCard.scss";

export default function HistoryTopCard({ miner }: { miner: Miner }) {
  function back() {
    Taro.navigateBack();
  }
  return (
    <View
      className="history-top-card"
      style={{ top: `calc(${titleBarHeight} + 65px)` }}
    >
      <Text style={{ fontSize: "8px" }}>{miner.planet.name}</Text>
      <Text className="font-bold" style={{ fontSize: "18px" }}>
        {miner.name}
      </Text>
      <Text style={{ fontSize: "14px" }}>History</Text>
      <Text
        className="iconfont icon-left-arrow"
        style={{ fontSize: "12px" }}
        onClick={back}
      ></Text>
    </View>
  );
}
