import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import MinerProperty from "./MinerProperty";
import { MINER_STATUS_MAP } from "../../constant";
import { Miner } from "../../types/miner";
import "./MinerItem.scss";

export default function MinerItem({ miner }: { miner: Miner }) {
  function clickMiner() {
    Taro.navigateTo({
      url: `/pages/minerHistory/index?id=${miner._id}&name=${encodeURIComponent(
        miner.name
      )}`,
    });
  }
  return (
    <View className="miner-item" onClick={clickMiner}>
      <View className="left font-bold">
        <View>
          <View style={{ fontSize: "8px" }}>{miner.planet.name}</View>
          <View style={{ fontSize: "16px" }}>{miner.name}</View>
        </View>
        <View className="status-botton" style={{ fontSize: "10px" }}>
          {MINER_STATUS_MAP[miner.status]}
        </View>
      </View>
      <View className="right">
        <View style={{ display: "flex", marginRight: "16px" }}>
          <View>
            <View style={{ marginRight: "16px", marginBottom: "2px" }}>
              <MinerProperty
                title="Carry Capacity"
                content={`${miner.carryCapacity}/200`}
                contentColor={miner.carryCapacity === 200 ? "#6BE480" : "#fff"}
              />
            </View>
            <MinerProperty
              title="Position"
              content={`${Math.round(miner.x)},${Math.round(miner.y)}`}
            />
          </View>
          <View>
            <MinerProperty
              title="Travel Speed"
              content={miner.travelSpeed + ""}
            />
          </View>
        </View>
        <Text
          className="iconfont icon-right-arrow"
          style={{ fontSize: "12px" }}
        ></Text>
      </View>
    </View>
  );
}
