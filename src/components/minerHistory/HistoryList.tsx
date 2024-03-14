import { View } from "@tarojs/components";
import HistoryItem from "./HistoryItem";
import { MinerHistory } from "../../types/miner";
import "./HistoryList.scss";

export default function HistoryList({
  minerHistory,
}: {
  minerHistory: MinerHistory[];
}) {
  return (
    <View className="history-list">
      {!!minerHistory.length &&
        minerHistory.map((history) => (
          <HistoryItem history={history} key={history._id} />
        ))}
    </View>
  );
}
