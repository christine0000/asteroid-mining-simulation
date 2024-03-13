import { View } from "@tarojs/components";
import MinerItem from "./MinerItem";
import "./index.scss"

export default function MinerList({ minerList }) {
  return (
    <View>
      <View style={{ marginTop: "43px", paddingTop: "16px" }}>
        {minerList.map((miner) => (
          <MinerItem miner={miner} key={miner._id} />
        ))}
      </View>
    </View>
  );
}
