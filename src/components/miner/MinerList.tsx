import { View } from "@tarojs/components";
import MinerTitle from "./MinerTitle";
import MinerItem from "./MinerItem";

export default function MinerList({ minerList }) {
  return (
    <View>
      <MinerTitle years={200} />
      <View style={{ marginTop: "86rpx", paddingTop: "32rpx" }}>
        {minerList.map((miner) => (
          <MinerItem miner={miner} key={miner._id} />
        ))}
      </View>
    </View>
  );
}
