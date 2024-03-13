import { View, Text } from "@tarojs/components";
import { format } from "date-fns";
import MinerProperty from "../miners/MinerProperty";
import { MINER_STATUS_MAP } from "../../constant";
import "./index.scss";

export default function HistoryItem({ history }) {
  return (
    <View className="history-item">
      <View className="left font-bold">
        <View>
          <View style={{ fontSize: "8px" }}>
            {format(history.updatedAt, "d/MM/yyyy, h:mm:ss a")}
          </View>
          <View style={{ fontSize: "16px" }}>{history.name}</View>
        </View>
        <View className="statusBotton" style={{ fontSize: "10px" }}>
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
              content={history.speed.mining}
            />
          </View>
        </View>
        <View>
          <View style={{ marginRight: "16px", marginBottom: "2px" }}>
            <MinerProperty
              title="Travel Speed"
              content={history.speed.travel}
            />
          </View>
          <View>
            <MinerProperty
              title="Position"
              content={`${parseInt(history.position.x)},${parseInt(history.position.y)}`}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
