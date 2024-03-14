import { View } from "@tarojs/components";
import MinerItem from "./MinerItem";
import { Miner } from "../../types/miner";

export default function MinerList({ minerList }:{minerList: Miner[]}) {
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
