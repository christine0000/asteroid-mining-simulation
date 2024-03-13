import { View } from "@tarojs/components";
import "./index.scss";
import MinerProperty from "./MinerProperty";
import { MINER_STATUS_MAP } from "../../constant";

export default function MinerItem({ miner }) {
  return (
    <View className="minerItem">
      <View className="left fontBold">
        <View>
          <View style={{ fontSize: "16rpx" }}>{miner.planet}</View>
          <View style={{ fontSize: "32rpx" }}>{miner.name}</View>
        </View>
        <View className="statusBotton">{MINER_STATUS_MAP[miner.status]}</View>
      </View>
      <View className="right">
        <View style={{ display: "flex", marginRight: "32rpx" }}>
          <View>
            <View style={{ marginRight: "32rpx", marginBottom: "4rpx" }}>
              <MinerProperty
                title="Carry Capacity"
                content={`${miner.carryCapacity}/200`}
                contentColor={miner.carryCapacity === 200 ? "#6BE480" : "#fff"}
              />
            </View>
            <MinerProperty
              title="Position"
              content={`${parseInt(miner.x)},${parseInt(miner.y)}`}
            />
          </View>
          <View>
            <MinerProperty title="Travel Speed" content={miner.travelSpeed} />
          </View>
        </View>
        <View style={{ fontSize: "45rpx" }}>{`>`}</View>
      </View>
    </View>
  );
}
