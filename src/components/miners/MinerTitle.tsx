import { View } from "@tarojs/components";
import { titleBarHeight } from "../../constant";
import "./MinerTitle.scss";

export default function MinerTitle({ years }: { years: number }) {
  return (
    <View
      className="miner-title-container"
      style={{ top: `calc(${titleBarHeight})` }}
    >
      <View className="miner-title" style={{ fontSize: "16px" }}>
        {years} YEARS
      </View>
    </View>
  );
}
