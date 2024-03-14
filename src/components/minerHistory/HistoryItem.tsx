import { View } from "@tarojs/components";
import { format } from "date-fns";
import MinerProperty from "../miners/MinerProperty";
import { MINER_STATUS_MAP } from "../../constant";
import { MinerHistory } from "../../types/miner";
import "./HistoryItem.scss";

export default function HistoryItem({ history }: { history: MinerHistory }) {
  return (
    <View className="history-item">
      <View className="left font-bold">
        <View>
          <View style={{ fontSize: "8px" }}>
            {format(history.updatedAt, "d/MM/yyyy, h:mm:ss a")}
          </View>
          <View style={{ fontSize: "16px" }}>Year {history.year}</View>
        </View>
        <View className="status-botton" style={{ fontSize: "10px" }}>
          {MINER_STATUS_MAP[history.status]}
        </View>
      </View>
      <View className="right">
        <View>
          <View style={{ marginRight: "16px", marginBottom: "2px" }}>
            <MinerProperty
              title="Carry Capacity"
              content={`${history.capacity.current}/${history.capacity.max}`}
              contentColor={
                history.capacity.current === history.capacity.max
                  ? "#6BE480"
                  : "#fff"
              }
            />
          </View>
          <View>
            <MinerProperty
              title="Mining Speed"
              content={history.speed.mining + ""}
            />
          </View>
        </View>
        <View>
          <View style={{ marginRight: "16px", marginBottom: "2px" }}>
            <MinerProperty
              title="Travel Speed"
              content={history.speed.travel + ""}
            />
          </View>
          <View>
            <MinerProperty
              title="Position"
              content={`${Math.round(history.position.x)},${Math.round(
                history.position.y
              )}`}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
