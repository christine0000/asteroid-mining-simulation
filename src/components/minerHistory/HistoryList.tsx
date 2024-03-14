import { View } from "@tarojs/components";
import HistoryItem from "./HistoryItem";
import "./HistoryList.scss"

export default function HistoryList({ minerHistory }) {
  return (
    <View className="history-list">
      {!!minerHistory.length &&
        minerHistory.map((history) => <HistoryItem history={history} key={history._id} />)}
    </View>
  );
}
